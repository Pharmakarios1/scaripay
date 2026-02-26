import { useAuthStore } from "@store/AuthStore";
import useDashboardStore from "@store/dashboardStore";
import { useEffect } from "react";

export const useDashboard = () => {
  const user = useAuthStore((s) => s.user);

  const fetchDashboard = useDashboardStore((s) => s.fetchDashboard);

  useEffect(() => {
    if (!user) return;

    fetchDashboard(user.id); // store fetches & sets dashboard internally
  }, [user]);
};
