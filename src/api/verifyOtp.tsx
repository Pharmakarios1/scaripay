import { getDB, saveDB } from "@services/mockApi";

export const verifyOTP = async (phone: string, code: string) => {
  const db = getDB();

  if (db.otpStore[phone] !== code) {
    throw new Error("Invalid OTP");
  }

  const user = Object.values(db.users).find((u) => u.phone === phone);

  if (!user) throw new Error("User not found");

  user.isVerified = true;

  delete db.otpStore[phone];

  saveDB(db);

  return user;
};
