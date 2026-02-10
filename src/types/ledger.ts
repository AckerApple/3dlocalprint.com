export type LedgerDirection = "debit" | "credit";

export type LedgerStatus = "pending" | "posted" | "reconciled";

export interface LedgerEntry {
  id: string;
  amount: number;
  direction: LedgerDirection;
  title: string;
  billingCategory: string;
  applicableDate: string;
  notes?: string;
  status: LedgerStatus;
  createdAt: number;
  updatedAt: number;
}
