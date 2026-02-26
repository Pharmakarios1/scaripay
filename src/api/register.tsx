import { getDB, saveDB } from "@services/mockApi";

export const register = async (
  phone: string,
  email: string,
  password: string,
  referralCode?: string,
) => {
  const db = getDB();

  const id = crypto.randomUUID();

  db.users[id] = {
    id,
    phone,
    email,
    password,
    referralCode,
    isVerified: false,
  };

  db.dashboard[id] = {
    balance: 0,
    totalPointValue: 0,
    commissionPoint: 0,
    transactions: [],
    activities: [],
    chart: [],
  };

  saveDB(db);

  return { userId: id };
};
