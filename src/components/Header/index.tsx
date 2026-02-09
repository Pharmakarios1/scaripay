import { Button } from "antd";
import ScaripayLogo from "../../assets/icon.png";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import useMobile from "../../Hooks/useMobile";
const Header = () => {
  const ismobile = useMobile();
  const [menuBarOpen, setMenuBarOpen] = useState<boolean>(false);
  const menuItems = ["Product", "Packages", "Bonuses", "FAQ", "Blog"];
  return (
    <div className="h-20 w-full p-5 lg:px-10 sticky top-0 bg-gray-50 grid grid-cols-2 j">
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
        <Button type="text" className="text-blue-700!">
          Sign In
        </Button>
        {ismobile ? (
          <MenuOutlined size={30} />
        ) : (
          <Button type="primary" className="h-[35px!] inline-block!">
            " Create free Account"
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
