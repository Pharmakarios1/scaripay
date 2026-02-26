import { getDashboardApi } from "@api/dashboard";
import { useAuthStore } from "@store/AuthStore";
import useDashboardStore from "@store/dashboardStore";
import { useEffect } from "react";

export const useDashboard = () => {
  const user = useAuthStore((s) => s.user);

  const setDashboard = useDashboardStore((s) => s.setDashboard);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      const data = await getDashboardApi(user.id);

      setDashboard(data);
    };

    load();
  }, [user]);
};
