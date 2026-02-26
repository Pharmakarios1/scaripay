import useDashboardStore from "@store/dashboardStore";
import type { Transaction } from "@store/transactionStore";
import { Card, Typography } from "antd";

const { Text } = Typography;

const RecentActivities = () => {
  const transactions: Transaction[] = useDashboardStore(
    (state) => state.transactions,
  );

  const latestTransactions = transactions.slice(0, 5); // latest 5

  return (
    <div className="space-y-5 w-full max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>

      {latestTransactions.length === 0 && (
        <Text type="secondary">No recent activity</Text>
      )}

      {latestTransactions.map((tx) => (
        <Card
          key={tx.id}
          size="small"
          className="rounded-lg! shadow-sm! border! bg-amber-100! border-gray-200! hover:shadow-md! transition-all! "
        >
          <div className="flex justify-between items-center">
            <div>
              <Text
                strong
                className={
                  tx.type === "credit" ? "text-green-600!" : "text-red-600!"
                }
              >
                {tx.type.toUpperCase()}
              </Text>
              <div className="text-gray-600! text-sm!">
                ₦{tx.amount.toLocaleString()}
              </div>
            </div>
            <div className="text-gray-400! text-xs!">
              {new Date(tx.date).toLocaleString()}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default RecentActivities;
