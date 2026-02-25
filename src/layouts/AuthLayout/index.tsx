import Logo from "@components/Logo";
import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div className="border-b p-2 w-full rounded-md border-gray-200 sticky top-0 bg-white">
        <Logo />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
