import { Table } from "antd";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

export interface Transaction {
  id: string;
  amount: number;
  type: "credit" | "debit";
  date: string;
}

interface TransactionTableProps {
  transactions: Transaction[];
  pagination?: TablePaginationConfig | false;
  title?: string;
  cardStyle?: boolean; // ✅ optional card-style mode
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  pagination = { pageSize: 5 },
  title,
  cardStyle = false,
}) => {
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

  return (
    <div className="w-full">
      {title && <h3 className="mb-2">{title}</h3>}
      <Table
        columns={columns}
        dataSource={transactions}
        rowKey="id"
        pagination={pagination}
        rowClassName={cardStyle ? "mb-2 bg-amber-50 rounded-md shadow-sm p-2" : ""}
        style={cardStyle ? { background: "transparent" } : {}}
      />
    </div>
  );
};

export default TransactionTable;