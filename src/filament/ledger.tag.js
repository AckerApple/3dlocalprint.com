import {
  tag,
  tagElement,
  section,
  div,
  input,
  button,
  p,
  h1,
  h2,
  select,
  option,
  table,
  thead,
  tbody,
  tr,
  th,
  td,
  span,
  dialog,
  label,
  textarea,
} from "taggedjs";
import {
  signIn,
  signOutUser,
  saveLedgerEntries,
  subscribeLedgerEntries,
} from "./firebase.js";
import { AdminNav } from "./AdminNav.tag.js";
import { ledgerCategories } from "./ledger-categories.array.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { toast } from "./toast.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

let app = document.getElementById("ledgerApp");
const appRoot = { current: app };
let entries = [];
let stopLedger = null;
let isAuthorized = false;
let appMounted = false;
let currentUser = null;
let isLoading = true;
let modalOpen = false;
let modalMode = "create";
let activeEntryId = "";
let isSaving = false;
let isDeleting = false;
let submitted = false;
let totals = null;

const filters = {
  search: "",
  status: "",
  direction: "",
  category: "",
  startDate: "",
  endDate: "",
};
let showAdvancedFilters = false;

const LOCAL_STORAGE_KEYS = {
  category: "ledger:lastCategory",
  direction: "ledger:lastDirection",
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const getLocalStorageValue = (key, fallback = "") => {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

const setLocalStorageValue = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore write errors
  }
};

const getTodayIso = () => new Date().toISOString().slice(0, 10);

const createEntryId = () => {
  if (globalThis.crypto?.randomUUID) {
    return crypto.randomUUID();
  }
  const rand = Math.random().toString(36).slice(2, 10);
  return `ledger_${Date.now().toString(36)}_${rand}`;
};

const createDraft = () => ({
  title: "",
  amount: "",
  direction: getLocalStorageValue(LOCAL_STORAGE_KEYS.direction, "credit"),
  billingCategory: getLocalStorageValue(
    LOCAL_STORAGE_KEYS.category,
    "" // ledgerCategories[0] || "" // "Other"
  ),
  applicableDate: getTodayIso(),
  notes: "",
  status: "posted",
});

let draft = createDraft();

console.log('draft', {draft})

const sortLedgerEntries = (items) =>
  [...items].sort((a, b) => {
    const aDate = String(a.applicableDate || "");
    const bDate = String(b.applicableDate || "");
    if (aDate !== bDate) {
      return bDate.localeCompare(aDate);
    }
    return (Number(b.createdAt) || 0) - (Number(a.createdAt) || 0);
  });

const toDisplayAmount = (value) => currency.format(Number(value) || 0);

const toDisplayNet = (value) => {
  const amount = Number(value) || 0;
  if (amount > 0) return `+${currency.format(amount)}`;
  if (amount < 0) return `-${currency.format(Math.abs(amount))}`;
  return currency.format(0);
};

const toDisplayUpdated = (value) => {
  const ts = Number(value) || 0;
  if (!ts) return "—";
  return new Date(ts).toLocaleString();
};

const normalizeLoadedEntry = (item) => ({
  id: String(item?.id || ""),
  amount: Number(item?.amount) || 0,
  direction: item?.direction === "debit" ? "debit" : "credit",
  title: String(item?.title || ""),
  billingCategory: String(item?.billingCategory || ""),
  applicableDate: String(item?.applicableDate || ""),
  notes: String(item?.notes || ""),
  status: ["pending", "posted", "reconciled"].includes(item?.status)
    ? item.status
    : "posted",
  createdAt: Number(item?.createdAt) || Date.now(),
  updatedAt: Number(item?.updatedAt) || Date.now(),
});

const entryToDraft = (entry) => ({
  title: String(entry.title || ""),
  amount: Number(entry.amount).toFixed(2),
  direction: entry.direction === "debit" ? "debit" : "credit",
  billingCategory: String(entry.billingCategory || ""),
  applicableDate: String(entry.applicableDate || getTodayIso()),
  notes: String(entry.notes || ""),
  status: ["pending", "posted", "reconciled"].includes(entry.status)
    ? entry.status
    : "posted",
});

const isValidDate = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || "")) return false;
  const parsed = new Date(`${value}T00:00:00`);
  return !Number.isNaN(parsed.getTime());
};

const validateDraft = (source) => {
  const next = {};
  const title = String(source.title || "").trim();
  const amountRaw = String(source.amount || "").trim();
  const amount = Number(amountRaw);
  const decimalRule = /^\d+(\.\d{1,2})?$/;

  if (title.length < 2 || title.length > 80) {
    next.title = "Title must be 2-80 characters.";
  }
  if (!decimalRule.test(amountRaw) || !Number.isFinite(amount) || amount <= 0) {
    next.amount = "Amount must be a number greater than 0 (up to 2 decimals).";
  }
  if (!["debit", "credit"].includes(source.direction)) {
    next.direction = "Choose debit or credit.";
  }
  if (!String(source.billingCategory || "").trim()) {
    next.billingCategory = "Billing category is required.";
  }
  if (!isValidDate(source.applicableDate)) {
    next.applicableDate = "Applicable date is required.";
  }
  if (!["pending", "posted", "reconciled"].includes(source.status)) {
    next.status = "Status must be pending, posted, or reconciled.";
  }

  return next;
};

const normalizedDraft = () => {
  const title = String(draft.title || "").trim();
  const notes = String(draft.notes || "").trim();
  const billingCategory = String(draft.billingCategory || "").trim();
  return {
    title,
    notes,
    billingCategory: billingCategory || "",
    amount: Number(draft.amount),
    direction: draft.direction,
    applicableDate: draft.applicableDate,
    status: draft.status,
  };
};

const getAllCategoryOptions = () => {
  const set = new Set(ledgerCategories);
  entries.forEach((entry) => {
    if (entry.billingCategory) {
      set.add(entry.billingCategory);
    }
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

const getFilterCategories = () => {
  const set = new Set();
  entries.forEach((entry) => {
    if (entry.billingCategory) {
      set.add(entry.billingCategory);
    }
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b));
};

const getFilteredEntries = () => {
  const search = filters.search.trim().toLowerCase();
  return sortLedgerEntries(entries).filter((entry) => {
    const matchesSearch = !search
      || entry.title.toLowerCase().includes(search)
      || String(entry.notes || "").toLowerCase().includes(search);
    const matchesStatus = !filters.status || entry.status === filters.status;
    const matchesDirection = !filters.direction || entry.direction === filters.direction;
    const matchesCategory = !filters.category || entry.billingCategory === filters.category;
    const matchesStart = !filters.startDate || entry.applicableDate >= filters.startDate;
    const matchesEnd = !filters.endDate || entry.applicableDate <= filters.endDate;
    return (
      matchesSearch
      && matchesStatus
      && matchesDirection
      && matchesCategory
      && matchesStart
      && matchesEnd
    );
  });
};

const rerender = () => {
  if (!appRoot.current) return;
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(LedgerApp, nextRoot);
  requestAnimationFrame(() => {
    syncDirectionSelectStyles();
  });
  appMounted = true;
  app = appRoot.current;
};

const openCreateModal = () => {
  modalMode = "create";
  activeEntryId = "";
  draft = createDraft();
  submitted = false;
  modalOpen = true;
  rerender();
};

const openEditModal = (id) => {
  const entry = entries.find((item) => item.id === id);
  if (!entry) return;
  modalMode = "edit";
  activeEntryId = id;
  draft = entryToDraft(entry);
  submitted = false;
  modalOpen = true;
  rerender();
};

const closeModal = () => {
  modalOpen = false;
  submitted = false;
  isSaving = false;
  isDeleting = false;
  draft = createDraft();
  rerender();
};

const getSignedAmount = (entry) => {
  const amount = Number(entry.amount) || 0;
  return entry.direction === "debit" ? -amount : amount;
};

const calculateTotals = () => {
  const reconciledTotal = entries.reduce((acc, entry) => {
    if (entry.status !== "reconciled") return acc;
    return acc + getSignedAmount(entry);
  }, 0);

  const postedTotal = entries.reduce((acc, entry) => {
    if (!["posted", "reconciled"].includes(entry.status)) return acc;
    return acc + getSignedAmount(entry);
  }, 0);

  const pendingTotal = entries.reduce((acc, entry) => {
    return acc + getSignedAmount(entry);
  }, 0);

  totals = {
    reconciledTotal,
    postedTotal,
    pendingTotal,
  };
  toast.info(
    `Reconciled: ${toDisplayNet(reconciledTotal)} | Posted: ${toDisplayNet(postedTotal)} | Pending: ${toDisplayNet(pendingTotal)}`
  );
  rerender();
};

const handleSave = async () => {
  if (!isAuthorized) {
    toast.error("Sign in to save changes.");
    return;
  }
  submitted = true;
  const errors = validateDraft(draft);
  if (Object.keys(errors).length) {
    rerender();
    return;
  }
  isSaving = true;
  rerender();

  const normalized = normalizedDraft();
  const now = Date.now();
  let nextEntries = [];
  if (modalMode === "edit" && activeEntryId) {
    nextEntries = entries.map((item) =>
      item.id === activeEntryId
        ? {
            ...item,
            ...normalized,
            updatedAt: now,
          }
        : item
    );
  } else {
    nextEntries = [
      {
        id: createEntryId(),
        ...normalized,
        createdAt: now,
        updatedAt: now,
      },
      ...entries,
    ];
  }

  try {
    await saveLedgerEntries(sortLedgerEntries(nextEntries));
    setLocalStorageValue(LOCAL_STORAGE_KEYS.category, normalized.billingCategory);
    setLocalStorageValue(LOCAL_STORAGE_KEYS.direction, normalized.direction);
    toast.success(modalMode === "edit" ? "Ledger entry updated." : "Ledger entry added.");
    closeModal();
  } catch (error) {
    console.error("Failed to save ledger entries", error);
    toast.error("Save failed. Try again.");
    isSaving = false;
    rerender();
  }
};

const handleDelete = async () => {
  if (!activeEntryId) return;
  if (!confirm("Delete this ledger entry?")) return;
  if (!isAuthorized) {
    toast.error("Sign in to delete entries.");
    return;
  }
  isDeleting = true;
  rerender();
  try {
    const nextEntries = entries.filter((entry) => entry.id !== activeEntryId);
    await saveLedgerEntries(nextEntries);
    toast.success("Ledger entry deleted.");
    closeModal();
  } catch (error) {
    console.error("Failed to delete ledger entry", error);
    toast.error("Delete failed. Try again.");
    isDeleting = false;
    rerender();
  }
};

const onModalBackdropClick = (event) => {
  if (event?.target?.nodeName === "DIALOG") {
    closeModal();
  }
};

const onModalKeyDown = (event) => {
  if (event.key === "Enter" && event.target?.tagName !== "TEXTAREA") {
    event.preventDefault();
    if (!isSaving) {
      handleSave();
    }
  }
};

const syncModalSaveState = () => {
  const saveButton = document.getElementById("ledgerSaveButton");
  if (!saveButton) return;
  const isValid = Object.keys(validateDraft(draft)).length === 0;
  saveButton.disabled = !isValid || isSaving || isDeleting;
};

const applyDirectionSelectTone = (selectEl, value) => {
  if (!selectEl) return;
  selectEl.classList.remove("ledger-direction-select-credit", "ledger-direction-select-debit");
  if (value === "credit") {
    selectEl.classList.add("ledger-direction-select-credit");
    return;
  }
  if (value === "debit") {
    selectEl.classList.add("ledger-direction-select-debit");
  }
};

const syncDirectionSelectStyles = () => {
  applyDirectionSelectTone(
    document.getElementById("ledger-direction"),
    draft.direction
  );
  applyDirectionSelectTone(
    document.getElementById("ledger-filter-direction"),
    filters.direction
  );
};

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

const renderFieldError = (errors, field) =>
  submitted && errors[field]
    ? p.class`ledger-field-error`(errors[field])
    : null;

const renderModal = () => {
  if (!modalOpen) return null;
  const errors = validateDraft(draft);
  const isValid = Object.keys(errors).length === 0;
  const categoryOptions = getAllCategoryOptions();
  
  const shouldShowCustomCategoryInput = () => {
    const value = draft.billingCategory === "Other"
    || !categoryOptions.includes(String(draft.billingCategory || "").trim()) ? true : false

    return value
  }

  return dialog(
    {
      class: "qr-modal ledger-modal",
      open: true,
      onClick: onModalBackdropClick,
      onCancel: (event) => {
        event.preventDefault();
        closeModal();
      },
      onKeyDown: onModalKeyDown,
    },
    div.class`qr-modal-card ledger-modal-card`(
      div.class`qr-modal-header`(
        h2(modalMode === "edit" ? "Edit Ledger Entry" : "Add Ledger Entry"),
        div.class`qr-modal-actions`(
          button
            .type`button`
            .class`qr-modal-close`
            .onClick(closeModal)(
            "Close"
          )
        )
      ),
      div.class`ledger-form-grid`(
        label(
          "Title",
          input
            .type`text`
            .placeholder`Entry title`
            .value(() => draft.title)
            .onInput((event) => {
              draft.title = event.target.value;
              syncModalSaveState();
            })(),
          renderFieldError(errors, "title")
        ),
        label(
          "Amount",
          input
            .type`text`
            .attr("inputmode", "decimal")
            .placeholder`0.00`
            .value(() => draft.amount)
            .onInput((event) => {
              draft.amount = event.target.value;
              syncModalSaveState();
            })(),
          renderFieldError(errors, "amount")
        ),
        label(
          "Direction",
          select
            .id`ledger-direction`
            .class`ledger-direction-select`
            .value(() => draft.direction)
            .onChange((event) => {
              draft.direction = event.target.value;
              syncModalSaveState();
              applyDirectionSelectTone(event.target, draft.direction);
            })(
            option.value`credit`("+ Credit"),
            option.value`debit`("- Debit")
          ),
          renderFieldError(errors, "direction")
        ),
        label(
          "Applicable Date",
          input
            .type`date`
            .value(() => draft.applicableDate)
            .onChange((event) => {
              draft.applicableDate = event.target.value;
              syncModalSaveState();
            })(),
          renderFieldError(errors, "applicableDate")
        ),
        label(
          "Billing Category",
          div.class`ledger-category-row`(
            select
              .value(() => draft.billingCategory)
              .onChange((event) => {
                const selected = event.target.value;
                if (selected === "Other") {
                  const current = String(draft.billingCategory || "").trim();
                  draft.billingCategory = categoryOptions.includes(current)
                    ? "Other"
                    : (current || "");
                } else {
                  draft.billingCategory = selected;
                }

                syncModalSaveState();
              })(
              ...categoryOptions.map((category) =>
                option.value(category)(category)
              )
            ),
            _=> shouldShowCustomCategoryInput()
              && input
                  .type`text`
                  .placeholder`Custom category`
                  .value(_=> draft.billingCategory)
                  .onInput((event) => {
                    const next = String(event.target.value || "").trim();
                    draft.billingCategory = next || "";
                    syncModalSaveState();
                  })
          ),
          renderFieldError(errors, "billingCategory")
        ),
        label(
          "Status",
          select
            .value(() => draft.status)
            .onChange((event) => {
              draft.status = event.target.value;
              syncModalSaveState();
            })(
            option
              .value`pending`
              .attr("title", "its not hit bank")(
              "⏳ Pending"
            ),
            option
              .value`posted`
              .attr("title", "its in the bank")(
              "🏦 Posted"
            ),
            option
              .value`reconciled`
              .attr("title", "its on quickbooks and bank")(
              "✅ Reconciled"
            )
          ),
          renderFieldError(errors, "status")
        ),
        label(
          "Notes (optional)",
          textarea
            .class`ledger-notes`
            .placeholder`Optional notes`
            .value(() => draft.notes)
            .onInput((event) => {
              draft.notes = event.target.value;
            })()
        )
      ),
      div.class`ledger-modal-actions`(
        modalMode === "edit"
          ? button(
              {
                type: "button",
                class: "ghost-button delete-button",
                disabled: isDeleting || isSaving,
                onClick: handleDelete,
              },
              isDeleting ? "Deleting..." : "Delete"
            )
          : null,
        button(
          {
            type: "button",
            class: "ghost-button",
            disabled: isDeleting || isSaving,
            onClick: closeModal,
          },
          "Cancel"
        ),
        button(
          {
            id: "ledgerSaveButton",
            type: "button",
            class: "add-button",
            disabled: !isValid || isSaving || isDeleting,
            onClick: handleSave,
          },
          isSaving ? "Saving..." : "Save"
        )
      )
    )
  );
};

export const LedgerApp = tag(() => {
  const filteredEntries = getFilteredEntries();
  const filterCategories = getFilterCategories();

  return [
    AdminNav(handleSignOut, currentUser),
    section.class`panel ledger-panel`(
      div.class`ledger-header`(
        div.class`ledger-heading`(
          h1("Ledger"),
          p("Track incoming and outgoing monies in one place.")
        ),
        div.class`ledger-header-actions`(
          button
            .type`button`
            .class`ghost-button`
            .onClick(calculateTotals)(
            "Calculate Totals"
          ),
          button
            .type`button`
            .class`add-button`
            .onClick(openCreateModal)(
            "+ Add Entry"
          ),
          totals === null
            ? null
            : div.class`ledger-totals`(
                p.class`ledger-net-value`(`Reconciled total: ${toDisplayNet(totals.reconciledTotal)}`),
                p.class`ledger-net-value`(`Posted total: ${toDisplayNet(totals.postedTotal)}`),
                p.class`ledger-net-value`(`Pending total: ${toDisplayNet(totals.pendingTotal)}`)
              )
        )
      ),
      div.class`ledger-filters`(
        div.class`ledger-filters-primary`(
          input
            .type`search`
            .placeholder`Search title or notes`
            .value(() => filters.search)
            .onInput((event) => {
              filters.search = event.target.value;
              rerender();
            })(),
          select
            .value(() => filters.status)
            .onChange((event) => {
              filters.status = event.target.value;
              rerender();
            })(
            option.value``("All statuses"),
            option.value`pending`("⏳ Pending"),
            option.value`posted`("🏦 Posted"),
            option.value`reconciled`("✅ Reconciled")
          ),
          button
            .type`button`
            .class`ghost-button`
            .onClick(() => {
              showAdvancedFilters = !showAdvancedFilters;
              rerender();
            })(
            showAdvancedFilters ? "Fewer filters" : "More filters"
          )
        ),
        showAdvancedFilters
          ? div.class`ledger-filters-advanced`(
              select
                .id`ledger-filter-direction`
                .class`ledger-direction-select`
                .value(() => filters.direction)
                .onChange((event) => {
                  filters.direction = event.target.value;
                  applyDirectionSelectTone(event.target, filters.direction);
                  rerender();
                })(
                option.value``("All directions"),
                option.value`credit`("+ Credit"),
                option.value`debit`("- Debit")
              ),
              select
                .value(() => filters.category)
                .onChange((event) => {
                  filters.category = event.target.value;
                  rerender();
                })(
                option.value``("All categories"),
                ...filterCategories.map((category) =>
                  option.value(category)(category)
                )
              ),
              input
                .type`date`
                .value(() => filters.startDate)
                .onChange((event) => {
                  filters.startDate = event.target.value;
                  rerender();
                })(),
              input
                .type`date`
                .value(() => filters.endDate)
                .onChange((event) => {
                  filters.endDate = event.target.value;
                  rerender();
                })()
            )
          : null
      ),
      isLoading ? p("Loading...") : null,
      !isLoading && filteredEntries.length === 0
        ? p.class`ledger-empty`("No entries found. Add your first entry.")
        : null,
      !isLoading && filteredEntries.length
        ? [
            div.class`ledger-table-block`(
              div.class`ledger-table-wrap`(
                table.class`ledger-table`(
                  thead(
                    tr(
                      th("Applicable Date"),
                      th("Title"),
                      th("Category"),
                      th("Status"),
                      th("Direction"),
                      th("Amount")
                    )
                  ),
                  tbody(
                    ...filteredEntries.map((entry) =>
                      tr
                        .class`ledger-row`
                        .onClick(() => openEditModal(entry.id))(
                        td(entry.applicableDate || "—"),
                        td(
                          span
                            .class`ledger-title-cell`
                            .attr("title", entry.title || "—")(
                            entry.title || "—"
                          )
                        ),
                        td(entry.billingCategory || "—"),
                        td(
                          span.class`pill ledger-status-pill ${
                            entry.status === "pending"
                              ? "ledger-status-pending"
                              : entry.status === "reconciled"
                                ? "ledger-status-reconciled"
                                : "ledger-status-posted"
                          }`(
                            entry.status || "posted"
                          )
                        ),
                        td(
                          span.class`pill ledger-direction-pill ${entry.direction === "debit" ? "ledger-direction-debit" : "ledger-direction-credit"}`(
                            entry.direction === "debit" ? "- Debit" : "+ Credit"
                          )
                        ),
                        td(toDisplayAmount(entry.amount))
                      ).key(entry.id)
                    )
                  )
                )
              ),
              p.class`ledger-table-hint`("tap any row for more details")
            ),
          ]
        : null
    ),
    renderModal(),
  ];
});

const mountApp = () => {
  if (!appRoot.current || appMounted) {
    return;
  }
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(LedgerApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const mountSso = (status, userEmail, reason = "") => {
  if (!appRoot.current) return;
  mountSsoPanel({
    rootRef: appRoot,
    status,
    userEmail,
    adminEmail: "",
    onSignIn: () =>
      signIn().catch((error) => {
        console.error("Firebase sign-in failed", error);
        toast.error("Sign in failed. Try again.");
      }),
    onSignOut: handleSignOut,
    setAppMounted: (value) => {
      appMounted = value;
    },
  });
  app = appRoot.current;
};

mountSso("loading", "", "initial");

const handleAuthUser = async (user, reason = "") => {
  isAuthorized = false;
  const isAllowed = await handleAdminAuthUser({
    user,
    mountSso,
    toast,
    setCurrentUser: (value) => {
      currentUser = value;
    },
    onSignedOut: () => {
      if (stopLedger) {
        stopLedger();
        stopLedger = null;
      }
      isLoading = true;
    },
    onDenied: () => {
      if (stopLedger) {
        stopLedger();
        stopLedger = null;
      }
      isLoading = true;
    },
    onAuthorized: () => {
      isAuthorized = true;
      if (!stopLedger) {
        stopLedger = subscribeLedgerEntries((items) => {
          entries = sortLedgerEntries(
            (Array.isArray(items) ? items : []).map(normalizeLoadedEntry)
          );
          isLoading = false;
          if (isAuthorized) {
            if (appMounted) {
              rerender();
            } else {
              mountApp();
            }
          }
        });
      }
      mountApp();
    },
    reason,
  });
  if (!isAllowed) return;
};

startAuthFlow({
  onUser: handleAuthUser,
  toast,
});
