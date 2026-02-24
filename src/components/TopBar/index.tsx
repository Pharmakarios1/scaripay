import bell from "@assets/bell icon.png";
import user from "@assets/user icon.png";
import dwd from "@assets/drawdown.png";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useResponsive } from "ahooks";
import { useUIStore } from "@store/uiStore";
import CustomDrawer from "@components/Drawer";
import Sidebar from "@components/Sidebar";
const TopBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = useUIStore((s) => s.toggleDrawer);
  const mobile = useResponsive();
  const isMobile = !mobile.lg;
  return (
    <>
      <div className="flex justify-between items-center h-full text-gray-600">
        <div className="flex gap-5">
          {isMobile && <MenuOutlined onClick={toggleDrawer} />}
          <div className="text-md md:text-xl font-bold ">Dashboard</div>
        </div>
        <div className="flex items-center justify-between w-30">
          <img src={bell} alt="" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              {" "}
              <img src={user} alt="" />
            </div>
            <img
              src={dwd}
              alt=""
              onClick={() => setOpen((prev) => !prev)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      {open && <div className="w-30 h-40 rounded-md bg-gray-300 z-50"></div>}
      <CustomDrawer placement="left">
        <Sidebar />
      </CustomDrawer>
    </>
  );
};

export default TopBar;
