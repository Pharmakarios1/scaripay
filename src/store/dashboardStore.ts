// store/dashboardStore.ts
import { create } from "zustand";

interface DashboardState {
  balance: number;
  commissionPoints: number;

  addMoney: (amount: number) => void;
  deductMoney: (amount: number) => void;
  addCommission: (points: number) => void;
  resetDashboard: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  balance: 5000,
  commissionPoints: 20,
  totalPointValue: 30,

  addMoney: (amount) =>
    set((state) => ({
      balance: state.balance + amount,
    })),

  deductMoney: (amount) =>
    set((state) => ({
      balance: state.balance - amount,
    })),

  addCommission: (points) =>
    set((state) => ({
      commissionPoints: state.commissionPoints + points,
    })),

  resetDashboard: () =>
    set({
      balance: 0,
      commissionPoints: 0,
    }),
}));
