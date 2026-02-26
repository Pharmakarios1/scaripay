import { Card, List, Avatar, Typography } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LockOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { useAuthStore } from "@store/AuthStore";
import CustomButton from "@components/Button";
import { useNavigate } from "react-router-dom";
import router from "@utils/router.util";

const { Title, Text } = Typography;

interface SettingItem {
  title: string;
  icon: React.ReactNode;
  action?: () => void;
}

const UserIndex = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  if (!user) return null;

  const settings: SettingItem[] = [
    {
      title: "Profile Settings",
      icon: <UserOutlined />,
      action: () => router({ navigate, route: "/profile" }),
    },
    {
      title: "Security Settings",
      icon: <LockOutlined />,
      action: () => router({ navigate, route: "/security" }),
    },
    {
      title: "App Settings",
      icon: <SettingOutlined />,
      action: () => router({ navigate, route: "/settings" }),
    },
  ];

  const handleLogout = () => {
    logout();
    router({ navigate, route: "/" });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="shadow-md rounded-xl">
        {/* User Info */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar size={64} icon={<UserOutlined />} />

          <div>
            <Title level={4} className="mb-0!">
              {user.email}
            </Title>
            <Text type="secondary">{user.phone}</Text>
          </div>
        </div>

        {/* Settings List */}
        <List
          itemLayout="horizontal"
          dataSource={settings}
          renderItem={(item) => (
            <List.Item
              className="cursor-pointer hover:bg-gray-50 px-2 rounded"
              onClick={item.action}
            >
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} />}
                title={item.title}
              />
            </List.Item>
          )}
        />

        {/* Logout Button */}
        <div className="mt-6">
          <CustomButton
            title="Logout"
            type="primary"
            size="large"
            icon={<LogoutOutlined />}
            className="w-full bg-red-600!"
            onClick={handleLogout}
          />
        </div>
      </Card>
    </div>
  );
};

export default UserIndex;
