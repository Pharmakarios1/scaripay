import { Drawer } from "antd";
import type { ReactNode } from "react";
interface drawerProps {
  children: ReactNode;
}
const CustomDrawer: React.FC<drawerProps> = ({ children }) => {
  return <Drawer>{children}</Drawer>;
};

export default CustomDrawer;
