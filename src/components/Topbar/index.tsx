import { useState } from "react";

//components
import { BellOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

import CustomDrawer from "@components/Drawer";
import Sidebar from "@components/Sidebar";


//api and state
import { useResponsive } from "ahooks";
import { useUIStore } from "@store/uiStore";
import UserIndex from "@pages/User";

const TopBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = useUIStore((s) => s.toggleDrawer);
  const mobile = useResponsive();
  const isMobile = !mobile.lg;

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
        <div className="absolute! top-8! right-1! z-10!">
          <UserIndex />
        </div>
      )}
      <CustomDrawer placement="left">
        <Sidebar />
      </CustomDrawer>
    </>
  );
};

export default TopBar;
