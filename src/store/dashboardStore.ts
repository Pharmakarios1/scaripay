import { create } from "zustand";
import { persist } from "zustand/middleware";

import { addMoneyApi } from "@api/deposit";
import { getDashboardApi } from "@api/dashboard";

// ✅ ChartPoint type
export interface ChartPoint {
  date: string;
  value: number;
}

// ✅ DashboardState interface
interface DashboardState {
  walletBalance: number;
  totalPointValue: number;
  commissionPoint: number;

  transactions: any[];
  activities: any[];
  chart: ChartPoint[];

  loading: boolean;

  fetchDashboard: (userId: string) => Promise<void>;
  addMoney: (userId: string, amount: number) => Promise<void>;
  reset: () => void;
}

// ✅ initial state
const initialState: Omit<
  DashboardState,
  "fetchDashboard" | "addMoney" | "reset"
> = {
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

      // fetch dashboard from API
      fetchDashboard: async (userId: string) => {
        set({ loading: true });

        const dashboard = await getDashboardApi(userId);

        set({
          walletBalance: dashboard.balance,
          totalPointValue: dashboard.totalPointValue,
          commissionPoint: dashboard.commissionPoint,
          transactions: dashboard.transactions,
          activities: dashboard.activities,
          chart: dashboard.chart || [],
          loading: false,
        });
      },

      // deposit money
      addMoney: async (userId: string, amount: number) => {
        set({ loading: true });

        const dashboard = await addMoneyApi(userId, amount);

        // update chart automatically
        const updatedChart: ChartPoint[] = [...(dashboard.chart || [])];
        const today = new Date().toLocaleDateString("en-US", {
          weekday: "short",
        });

        const todayIndex = updatedChart.findIndex((d) => d.date === today);

        if (todayIndex >= 0) {
          updatedChart[todayIndex].value += amount;
        } else {
          updatedChart.push({ date: today, value: amount });
        }

        set({
          walletBalance: dashboard.balance,
          transactions: dashboard.transactions,
          activities: dashboard.activities,
          chart: updatedChart,
          loading: false,
        });
      },

      reset: () => set(initialState),
    }),
    {
      name: "dashboard-storage", // localStorage key
    },
  ),
);

export default useDashboardStore;
