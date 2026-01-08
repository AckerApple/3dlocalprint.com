export let viewMode = "summary";
export let editAll = false;
export let editingIndex = null;

export const toggleRowEdit = (index) => {
  if (editAll) {
    editAll = false;
  }
  editingIndex = editingIndex === index ? null : index;
};

export const setViewMode = (mode) => {
  viewMode = mode;
};

export const toggleEditAll = () => {
  editAll = !editAll;
  if (editAll) {
    editingIndex = null;
  }
};
