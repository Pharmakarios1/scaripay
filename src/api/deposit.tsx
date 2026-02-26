import { delay, generateDashboard, getDB, saveDB } from "@services/mockApi";

export const addMoneyApi = async (userId: string, amount: number) => {
  await delay();

  const db = getDB();

  const user = db.users[userId];

  if (!user) throw new Error("User not found");

  // ensure dashboard exists
  if (!db.dashboard[userId]) {
    db.dashboard[userId] = generateDashboard();
  }

  const dashboard = db.dashboard[userId];

  // update balance
  dashboard.balance += amount;

  // add transaction
  dashboard.transactions.unshift({
    id: crypto.randomUUID(),
    type: "credit",
    amount,
    date: new Date().toISOString(),
  });

  // add activity
  dashboard.activities.unshift({
    id: crypto.randomUUID(),
    message: `Deposited ₦${amount}`,
    date: new Date().toISOString(),
  });

  saveDB(db);

  return dashboard;
};
