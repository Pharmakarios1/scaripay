import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DashboardState {
  walletBalance: number;
  totalPointValue: number;
  commissionPoint: number;

  transactions: any[];
  activities: any[];
  chart: any[];

  loading: boolean;

  setDashboard: (data: any) => void;
  addMoney: (amount: number) => void;

  reset: () => void;
}

const initialState = {
  walletBalance: 0,
  totalPointValue: 0,
  commissionPoint: 0,

  transactions: [],
  activities: [],
  chart: [],

  loading: false,
};

const useDashboardStore = create<DashboardState>()(
  persist(
    (set) => ({
      ...initialState,

      setDashboard: (data) =>
        set({
          walletBalance: data.walletBalance,
          totalPointValue: data.totalPointValue,
          commissionPoint: data.commissionPoint,

          transactions: data.transactions,
          activities: data.activities,
          chart: data.chart,
        }),

      addMoney: (amount) =>
        set((state) => ({
          walletBalance: state.walletBalance + amount,
        })),

      reset: () => set(initialState),
    }),
    {
      name: "dashboard-storage",
    },
  ),
);

export default useDashboardStore;
