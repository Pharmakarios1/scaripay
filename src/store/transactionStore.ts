// store/transactionStore.ts
import { create } from "zustand";

export interface Transaction {
  id: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
}

interface TransactionState {
  transactions: Transaction[];
  setTransactions: (data: Transaction[]) => void;
  addTransaction: (tx: Transaction) => void;
  clearTransactions: () => void;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],

  setTransactions: (data) => set({ transactions: data }),

  addTransaction: (tx) =>
    set((state) => ({
      transactions: [tx, ...state.transactions],
    })),

  clearTransactions: () => set({ transactions: [] }),
}));