import { create } from "zustand";

interface WalletState {
  balance: number;
  commissionPoints: number;
  loading: boolean;

  setWallet: (balance: number, commission: number) => void;
  updateBalance: (balance: number) => void;
  updateCommission: (points: number) => void;
  setLoading: (value: boolean) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  balance: 0,
  commissionPoints: 0,
  loading: false,

  setWallet: (balance, commission) =>
    set({ balance, commissionPoints: commission }),

  updateBalance: (balance) => set({ balance }),

  updateCommission: (points) => set({ commissionPoints: points }),

  setLoading: (value) => set({ loading: value }),
}));
