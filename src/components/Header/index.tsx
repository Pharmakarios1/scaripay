import { Button } from "antd";
import ScaripayLogo from "../../assets/icon.png";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import useMobile from "../../Hooks/useMobile";

const Header = () => {
  const ismobile = useMobile();
  // const [menuBarOpen, setMenuBarOpen] = useState<boolean>(false);
  const menuItems = ["Product", "Packages", "Bonuses", "FAQ", "Blog"];
  return (
    <header className="h-20 w-full p-5 lg:px-20 sticky top-0 z-5000 grid grid-cols-2 border-b border-gray-100 backdrop-blur-sm">
      <div className="flex justify-between h-full items-center gap-5">
        <div className="flex gap-2 ">
          <img src={ScaripayLogo} alt="scaripay-logo" className="h-8 w-8" />
          <p className="text-[#444C66] font-semibold text-[25px]">Scaripay</p>
        </div>
        <div className="hidden md:flex  gap-5 ">
          {menuItems.map((menuItem, idx) => {
            return <div key={idx}>{menuItem}</div>;
          })}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <div>EN</div>
        <Button type="text" className="text-[#173AE5]">
          Sign In
        </Button>
        {ismobile ? (
          <MenuOutlined size={30} />
        ) : (
          <Button
            type="primary"
            className="h-10! inline-block!   bg-[#173AE5]!"
          >
            " Create free Account"
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
