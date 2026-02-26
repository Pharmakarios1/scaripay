import { getDB, saveDB } from "@services/mockApi";

export const deposit = async (userId: string, amount: number) => {
  const db = getDB();
  const dashboard = db.dashboard[userId];

  dashboard.balance += amount;
  dashboard.totalPointValue += amount;
  dashboard.commissionPoint += amount * 0.02;

  dashboard.transactions.unshift({
    id: crypto.randomUUID(),
    type: "credit",
    amount,
    date: new Date().toISOString(),
  });

  dashboard.activities.unshift({
    id: crypto.randomUUID(),
    message: `Deposited ₦${amount}`,
    date: new Date().toISOString(),
  });

  saveDB(db);

  return dashboard;
};
