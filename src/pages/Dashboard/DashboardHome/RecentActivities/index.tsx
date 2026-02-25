import { Card, List } from "antd";
import { useTransactionStore } from "@store/transactionStore";

const RecentActivities = () => {
  const transactions = useTransactionStore((state) => state.transactions);

  return (
    <List
      className="border-gray-200 bg-amber-50! rounded-md h-55 mx-auto "
      dataSource={transactions.slice(0, 3)} // latest 5
      renderItem={(tx) => (
        <List.Item key={tx.id}>
          <Card size="small" style={{ width: "100%" }}>
            <p>
              <strong>{tx.type.toUpperCase()}</strong> - ₦
              {tx.amount.toLocaleString()}
            </p>
            <p>{new Date(tx.date).toLocaleString()}</p>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default RecentActivities;
