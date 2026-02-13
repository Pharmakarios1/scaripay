import { menuItems } from "@configs/index";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav
      className={`flex px-10 space-y-5 py-10 text-xl flex-col h-full lg:hidden text-md transition-all duration-300 rounded-md gap-5 bg-blue-50 `}
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
  );
};

export default MobileNav;
