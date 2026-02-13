import { Button } from "antd";
import ScaripayLogo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";
import { menuItems } from "@configs/index";
import { useUIStore } from "@store/uiStore";
import { useResponsive } from "ahooks";
import MobileNav from "./_partials/Mobile";
import CustomDrawer from "@components/Drawer";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  const responsive = useResponsive();
  const isMobile = !responsive.lg;
  const toggleMenuBar = useUIStore((s) => s.toggleDrawer);

  return (
    <>
      <header className="h-20 w-full p-5 lg:px-20 sticky top-0 z-5000 grid grid-cols-2 border-b border-gray-100 bg-gray-50">
        <div className="flex justify-between h-full items-center gap-5">
          <div className="flex gap-2 ">
            <img src={ScaripayLogo} alt="scaripay-logo" className="h-8 w-8" />
            <p className="text-[#444C66] font-semibold text-[15px] md:text-[25px]">
              Scaripay
            </p>
          </div>
          {/* =================DeskTop Menu start======================= */}
          <div className="hidden lg:flex  gap-5 ">
            {menuItems.map((menuItem, idx) => {
              return (
                <NavLink
                  to={menuItem.link}
                  key={idx}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white border-b border-blue-800 font-black"
                      : "hover:text-blue-800 hover:scale-[1.1]"
                  }
                >
                  {menuItem.label}
                </NavLink>
              );
            })}
          </div>
          {/* =================DeskTop Menu end======================= */}
        </div>

        <div className="flex items-center justify-end">
          <div>EN</div>
          <Button type="text" className="text-[#173AE5]">
            Sign In
          </Button>
          <div className="hidden md:block">
            <Button type="primary" size="large">
              Create Free Account
            </Button>
          </div>

          {/* ============= Menu Bar on the Mobile================ */}
          <div className="md:hidden">
            <Button
              type="text"
              size="large"
              icon={<MenuOutlined />}
              onClick={toggleMenuBar}
            />
          </div>

          {/* ================================== */}

          {isMobile && (
            <CustomDrawer>
              <MobileNav />
            </CustomDrawer>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
