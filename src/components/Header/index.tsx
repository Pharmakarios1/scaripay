import { Button } from "antd";
import ScaripayLogo from "../../assets/icon.png";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useResponsive } from "ahooks";
import { useState } from "react";

const menuItems = [
  { label: "Product", link: "/product" },
  { label: "Packages", link: "/packages" },
  { label: "Bonuses", link: "/bonuses" },
  { label: "Faq", link: "/faq" },
  { label: "Blog", link: "/blog" },
];

const Header = () => {
  const responsive = useResponsive();
  const isMobile = responsive.sm === false;
  const [menuBarOpen, setMenuBarOpen] = useState<boolean>(false);

  const handleMobileMenu = () => {
    setMenuBarOpen((prev: any) => !prev);
  };

  return (
    <>
      <header className="h-20 w-full p-5 lg:px-20 sticky top-0 z-5000 grid grid-cols-2 border-b border-gray-100 backdrop-blur-sm">
        <div className="flex justify-between h-full items-center gap-5">
          <div className="flex gap-2 ">
            <img src={ScaripayLogo} alt="scaripay-logo" className="h-8 w-8" />
            <p className="text-[#444C66] font-semibold text-[15px] md:text-[25px]">
              Scaripay
            </p>
          </div>
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
        </div>

        <div className="flex items-center justify-end">
          <div>EN</div>
          <Button type="text" className="text-[#173AE5]">
            Sign In
          </Button>

          <div className="md:hidden">
            {menuBarOpen ? (
              <Button type="primary">
                <CloseOutlined size={80} onClick={handleMobileMenu} />
              </Button>
            ) : (
              <Button type="primary">
                <MenuOutlined size={80} onClick={handleMobileMenu} />
              </Button>
            )}
          </div>

          <div className="hidden md:block">
            <Button
              type="primary"
              className="h-10! inline-block!   bg-[#173AE5]!"
            >
              Create free Account
            </Button>
          </div>
        </div>
      </header>
      {menuBarOpen && (
        <nav
          className={`flex px-10 py-4 flex-col lg:hidden text-md transition-all duration-300 rounded-md gap-5 bg-blue-300 `}
        >
          {menuItems.map((menuItem, idx) => {
            return (
              <NavLink
                to={menuItem.link}
                key={idx}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b border-blue-800 font-black"
                    : "hover:text-blue-800 "
                }
              >
                {menuItem.label}
              </NavLink>
            );
          })}
        </nav>
      )}
    </>
  );
};

export default Header;
