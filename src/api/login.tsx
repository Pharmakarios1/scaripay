import { getDB } from "@services/mockApi";

export const login = async (phone: string, password: string) => {
  const db = getDB();

  const user = Object.values(db.users).find(
    (u) => u.phone === phone && u.password === password,
  );

  if (!user) throw new Error("Invalid credentials");

  if (!user.isVerified) throw new Error("Phone not verified");

  return user;
};
