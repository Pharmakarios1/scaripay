const USERS_KEY = "mock_users";

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

const saveUsers = (users: any[]) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

// generate dashboard data for new user
const generateDashboard = () => ({
  walletBalance: 0,
  totalPointValue: 0,
  commissionPoint: 0,

  transactions: [
    {
      id: crypto.randomUUID(),
      type: "welcome_bonus",
      amount: 0,
      date: new Date().toISOString(),
    },
  ],

  activities: [
    {
      id: crypto.randomUUID(),
      message: "Account created",
      date: new Date().toISOString(),
    },
  ],

  chart: [
    { date: "Mon", value: 0 },
    { date: "Tue", value: 0 },
    { date: "Wed", value: 0 },
    { date: "Thu", value: 0 },
    { date: "Fri", value: 0 },
    { date: "Sat", value: 0 },
    { date: "Sun", value: 0 },
  ],
});

export const getDashboardApi = async (userId: string) => {
  await delay();

  const users = getUsers();

  const user = users.find((u: any) => u.id === userId);

  if (!user) throw new Error("User not found");

  if (!user.dashboard) {
    user.dashboard = generateDashboard();
    saveUsers(users);
  }

  return user.dashboard;
};

export const addMoneyApi = async (userId: string, amount: number) => {
  await delay();

  const users = getUsers();

  const user = users.find((u: any) => u.id === userId);

  if (!user) throw new Error("User not found");

  user.dashboard.walletBalance += amount;

  user.dashboard.transactions.unshift({
    id: crypto.randomUUID(),
    type: "deposit",
    amount,
    date: new Date().toISOString(),
  });

  user.dashboard.activities.unshift({
    id: crypto.randomUUID(),
    message: `Deposited ₦${amount}`,
    date: new Date().toISOString(),
  });

  saveUsers(users);

  return user.dashboard;
};
