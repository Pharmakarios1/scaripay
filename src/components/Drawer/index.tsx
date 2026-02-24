import { useUIStore } from "@store/uiStore";
import { Drawer } from "antd";
import { type ReactNode } from "react";
interface drawerProps {
  children?: ReactNode;
  placement: "right" | "left";
}
const CustomDrawer: React.FC<drawerProps> = ({ children, placement }) => {
  const isDrawerOpen = useUIStore((state) => state.isDrawerOpen);
  const closeDrawer = useUIStore((state) => state.closeDrawer);

  return (
    <>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} placement={placement}>
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;
