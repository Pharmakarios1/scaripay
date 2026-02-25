import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useTransactionStore } from "@store/transactionStore";

interface Transaction {
  id: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
}

const columns: ColumnsType<Transaction> = [
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    render: (type) => type.toUpperCase(),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => `₦${amount.toLocaleString()}`,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => new Date(date).toLocaleString(),
  },
];

const TransactionTable = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <Table
      columns={columns}
      dataSource={transactions}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default TransactionTable;
