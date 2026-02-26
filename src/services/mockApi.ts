type User = {
  id: string;
  phone: string;
  email: string;
  password: string;
  referralCode?: string;
  isVerified: boolean;
};

type DashboardData = {
  balance: number;
  totalPointValue: number;
  commissionPoint: number;
  transactions: Transaction[];
  activities: Activity[];
};

type Transaction = {
  id: string;
  type: "credit" | "debit";
  amount: number;
  date: string;
};

type Activity = {
  id: string;
  message: string;
  date: string;
};

interface MockDB {
  users: Record<string, User>;
  dashboard: Record<string, DashboardData>;
  otpStore: Record<string, string>;
}

const STORAGE_KEY = "mock-finance-db";

export const getDB = (): MockDB => {
  const db = localStorage.getItem(STORAGE_KEY);
  console.log(db);
  return db ? JSON.parse(db) : { users: {}, dashboard: {}, otpStore: {} };
};

export const saveDB = (db: MockDB) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
};






















// Forgot password and reset
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
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const users = JSON.parse(localStorage.getItem("mock_users") || "[]");

  const user = users.find((u: any) => u.email === email);

  // Always return success for security
  if (!user) return true;

  const token = generateToken();

  const tokens = getResetTokens();

  tokens.push({
    email,
    token,
    expires: Date.now() + 1000 * 60 * 10, // 10 mins
  });

  saveResetTokens(tokens);

  console.log("RESET TOKEN:", token);

  return true;
};

// Reset password


const USERS_KEY = "mock_users";


const getUsers = () =>
  JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

const saveUsers = (users: any[]) =>
  localStorage.setItem(USERS_KEY, JSON.stringify(users));



export const resetPasswordApi = async (
  token: string,
  newPassword: string
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const tokens = getResetTokens();

  const record = tokens.find(
    (t: any) => t.token === token && t.expires > Date.now()
  );

  if (!record) {
    throw new Error("Invalid or expired token");
  }

  const users = getUsers();

  const userIndex = users.findIndex(
    (u: any) => u.email === record.email
  );

  if (userIndex === -1) {
    throw new Error("User not found");
  }

  // update password
  users[userIndex].password = newPassword;

  saveUsers(users);

  // remove used token
  const filtered = tokens.filter((t: any) => t.token !== token);

  saveResetTokens(filtered);

  return true;
};