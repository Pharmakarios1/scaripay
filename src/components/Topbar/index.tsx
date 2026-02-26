import { useState } from "react";

//components
import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
import CustomDrawer from "@components/Drawer";
import Sidebar from "@components/Sidebar";
import LogoutButton from "@pages/Auth/logout";

//api and state
import { useResponsive } from "ahooks";
import { useUIStore } from "@store/uiStore";


const TopBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = useUIStore((s) => s.toggleDrawer);
  const mobile = useResponsive();
  const isMobile = !mobile.lg;
  const userActions = [<LogoutButton />];

  return (
    <>
      <div className="relative flex justify-between items-center h-full text-gray-600">
        <div className="flex gap-5">
          {isMobile && <MenuOutlined onClick={toggleDrawer} />}

          <div className="text-md md:text-xl font-bold ">Dashboard</div>
        </div>
        <div className="flex items-center justify-between w-20">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
            <BellOutlined size={300} />
          </div>

          <div
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            <UserOutlined />
          </div>
        </div>
      </div>
      {open && (
        <Card className="absolute! top-12! right-2! w-30! h-40!  z-10!">
          <div className="space-y-5">
            {userActions.map((user, index) => (
              <li key={index} className="py-1 cursor-pointer rounded-md">
                {user}
              </li>
            ))}
          </div>
        </Card>
      )}
      <CustomDrawer placement="left">
        <Sidebar />
      </CustomDrawer>
    </>
  );
};

export default TopBar;
