// src/services/mockApi.ts
// =============================
// TYPES
// =============================

export type User = {
  id: string;
  phone: string;
  email: string;
  password: string;
  referralCode?: string;
  isVerified: boolean;
};

export type ChartPoint = {
  date: string;
  value: number;
};

export type Transaction = {
  id: string;
  type: "credit" | "debit" | "welcome_bonus" | "deposit";
  amount: number;
  date: string;
};

export type Activity = {
  id: string;
  message: string;
  date: string;
};

export type DashboardData = {
  balance: number;
  totalPointValue: number;
  commissionPoint: number;
  transactions: Transaction[];
  activities: Activity[];
  chart: ChartPoint[];
};

interface MockDB {
  users: Record<string, User>;
  dashboard: Record<string, DashboardData>;
  otpStore: Record<string, string>;
}

// =============================
// LOCAL STORAGE HELPERS
// =============================

const STORAGE_KEY = "mock-finance-db";

export const getDB = (): MockDB => {
  const db = localStorage.getItem(STORAGE_KEY);
  return db ? JSON.parse(db) : { users: {}, dashboard: {}, otpStore: {} };
};

export const saveDB = (db: MockDB) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
};

// =============================
// DASHBOARD HELPERS
// =============================

// simulate network delay
export const delay = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// generate dashboard for new users
export const generateDashboard = (): DashboardData => ({
  balance: 20,
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

// =============================
// DASHBOARD API
// =============================

// get dashboard
export const getDashboardApi = async (userId: string) => {
  await delay();
  const db = getDB();

  const user = db.users[userId];
  if (!user) throw new Error("User not found");

  if (!db.dashboard[userId]) {
    db.dashboard[userId] = generateDashboard();
    saveDB(db);
  }

  return db.dashboard[userId];
};

// add money
export const addMoneyApi = async (userId: string, amount: number) => {
  await delay();
  const db = getDB();

  const user = db.users[userId];
  if (!user) throw new Error("User not found");

  if (!db.dashboard[userId]) {
    db.dashboard[userId] = generateDashboard();
  }

  db.dashboard[userId].balance += amount;

  // add transaction
  db.dashboard[userId].transactions.unshift({
    id: crypto.randomUUID(),
    type: "credit",
    amount,
    date: new Date().toISOString(),
  });

  // add activity
  db.dashboard[userId].activities.unshift({
    id: crypto.randomUUID(),
    message: `Deposited ₦${amount}`,
    date: new Date().toISOString(),
  });

  saveDB(db);

  return db.dashboard[userId];
};

// =============================
// PASSWORD RESET API
// =============================

type ResetToken = {
  email: string;
  token: string;
  expires: number;
};

const RESET_KEY = "reset_tokens";

const getResetTokens = (): ResetToken[] =>
  JSON.parse(localStorage.getItem(RESET_KEY) || "[]");

const saveResetTokens = (tokens: ResetToken[]) =>
  localStorage.setItem(RESET_KEY, JSON.stringify(tokens));

const generateToken = () => Math.random().toString(36).substring(2, 10);

export const forgotPasswordApi = async (email: string) => {
  await delay(1000);

  const users = JSON.parse(localStorage.getItem("mock_users") || "[]");
  const user = users.find((u: any) => u.email === email);

  if (!user) return true;

  const token = generateToken();
  const tokens = getResetTokens();
  tokens.push({ email, token, expires: Date.now() + 1000 * 60 * 10 });
  saveResetTokens(tokens);

  console.log("RESET TOKEN:", token);
  return true;
};

const USERS_KEY = "mock_users";
const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
const saveUsers = (users: any[]) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

export const resetPasswordApi = async (token: string, newPassword: string) => {
  await delay(1000);

  const tokens = getResetTokens();
  const record = tokens.find(
    (t) => t.token === token && t.expires > Date.now(),
  );
  if (!record) throw new Error("Invalid or expired token");

  const users = getUsers();
  const userIndex = users.findIndex((u: any) => u.email === record.email);
  if (userIndex === -1) throw new Error("User not found");

  users[userIndex].password = newPassword;
  saveUsers(users);

  // remove used token
  saveResetTokens(tokens.filter((t) => t.token !== token));

  return true;
};
