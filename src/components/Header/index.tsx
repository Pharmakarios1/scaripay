import { Button } from "antd";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "@store/AuthStore";
import { useUIStore } from "@store/uiStore";
import { useResponsive } from "ahooks";
import MobileNav from "./_partials/Mobile";
import CustomDrawer from "@components/Drawer";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { menuItems } from "@configs/index";
import router from "@utils/router.util";
import Logo from "@components/Logo";
import { useState } from "react";
import CustomButton from "@components/Button";

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const responsive = useResponsive();
  const isMobile = !responsive.lg;
  const toggleMenuBar = useUIStore((s) => s.toggleDrawer);
  const navigate = useNavigate();
  const [isMobiemenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((prev) => !prev);
    toggleMenuBar();
  };

  return (
    <>
      <header className="h-20 w-full p-5 lg:px-20 sticky top-0 z-5000 grid grid-cols-2 border-b border-gray-100 bg-gray-50 mx-auto">
        <div className="flex justify-between h-full items-center gap-10">
          <Logo />
          {/* =================DeskTop Menu start======================= */}
          <div className="hidden md:flex   gap-5 ">
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

        <div className="flex items-center justify-end gap-4">
          <div>EN</div>
          {!user ? (
            <div className="flex items-center justify-end">
              {" "}
              <Button
                type="text"
                className="text-[#173AE5]"
                onClick={() => router({ navigate, route: "/signin" })}
              >
                Sign In
              </Button>
              <div className="hidden md:block">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => router({ navigate, route: "/signup" })}
                >
                  Create Free Account
                </Button>
              </div>
            </div>
          ) : (
            <CustomButton
              title="Logout"
              onClick={() => {
                logout();
                router({ navigate, route: "/signin" });
              }}
            />
          )}

          {/* ============= Menu Bar on the Mobile================ */}
          <Button
            size="large"
            type="text"
            className="md:hidden!"
            onClick={handleMobileMenuClick}
          >
            {isMobiemenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </Button>

          {/* ================================== */}

          {isMobile && (
            <CustomDrawer placement="right">
              <MobileNav />
            </CustomDrawer>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
