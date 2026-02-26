import CustomButton from "@components/Button";

import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useAuthStore } from "@store/AuthStore";

const LogoutButton = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    message.success("Logged out successfully");

    navigate("/signin");
  };

  return (
    <CustomButton title="Logout" type="primary" className="bg-red-600!" onClick={handleLogout} />
  );
};

export default LogoutButton;
