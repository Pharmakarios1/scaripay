// services/mockApi.ts

type TransactionType = "credit" | "debit";

interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  date: string;
}

interface WalletResponse {
  balance: number;
  commissionPoints: number;
  transactions: Transaction[];
}

let balance = 2000;
let commissionPoints = 20;
let transactions: Transaction[] = [];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  async getWallet(): Promise<WalletResponse> {
    await delay(800);

    return {
      balance,
      commissionPoints,
      transactions,
    };
  },

  async deposit(amount: number): Promise<WalletResponse> {
    await delay(1000);

    // Backend calculates commission (5%)
    const commissionEarned = amount * 0.05;

    balance += amount;
    commissionPoints += commissionEarned;

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      amount,
      type: "credit",
      date: new Date().toISOString(),
    };

    transactions = [newTransaction, ...transactions];

    return {
      balance,
      commissionPoints,
      transactions,
    };
  },

  async withdraw(amount: number): Promise<WalletResponse> {
    await delay(1000);

    if (amount > balance) {
      throw new Error("Insufficient balance");
    }

    balance -= amount;

    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      amount,
      type: "debit",
      date: new Date().toISOString(),
    };

    transactions = [newTransaction, ...transactions];

    return {
      balance,
      commissionPoints,
      transactions,
    };
  },
};
