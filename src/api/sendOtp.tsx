import { getDB, saveDB } from "@services/mockApi";

export const sendOTP = async (phone: string) => {
  const db = getDB();

  const otp = Math.floor(1000 + Math.random() * 9000).toString();

  db.otpStore[phone] = otp;

  saveDB(db);

  console.log("Mock OTP:", otp); // simulate SMS

  return true;
};
