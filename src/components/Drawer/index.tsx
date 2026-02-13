import { useUIStore } from "@store/uiStore";
import { Drawer } from "antd";
import { type ReactNode } from "react";
interface drawerProps {
  children?: ReactNode;
}
const CustomDrawer: React.FC<drawerProps> = ({ children }) => {
  const isDrawerOpen = useUIStore((state) => state.isDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeDrawer);

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} placement="right">
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
