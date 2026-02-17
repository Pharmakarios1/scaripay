import logo from "@assets/icon.png";
import type { ReactNode } from "react";
const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[1fr_20fr] p-5 md:py-0">
      <div className="md:hidden flex gap-4 justify-start items-end">
        <img src={logo} alt="logoscaripay" className="w-10 h-10" />
        <p className="text-gray-500 text-3xl font-bold">Scaripay</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh] gap-10">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
