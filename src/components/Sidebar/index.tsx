import logo from "@assets/icon.png";
import { dashboardRoutes } from "@configs/index";
import { Menu } from "antd";

import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col items-start md:items-center my-5 space-y-10">
      <div className="flex gap-2">
        {" "}
        <img src={logo} alt="" />
        <p className="text-[25px]">Scaripay</p>
      </div>
      <div className="border border-gray-200 px-5 py-2 rounded-md">
        <h4 className="font-bold text-gray-600 text-md">
          Howdy folaranmi,
        </h4>
        <p>@ Basic Package</p>
      </div>
      <div>
        <Menu
          mode="inline"
          className="space-y-4! border-0!"
          selectedKeys={[location.pathname]}
          items={dashboardRoutes.map((route) => ({
            key: route.path,
            icon: route.icon,
            label: route.label,
          }))}
          onClick={({ key }) => navigate(key)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
