import { useNavigate } from "react-router-dom";
import ScaripayLogo from "@assets/icon.png";
import router from "@utils/router.util";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 cursor-pointer"
      onClick={() => router({ navigate, route: "/" })}
    >
      <img src={ScaripayLogo} alt="scaripay-logo" />
      <p className="text-[#444C66] font-semibold text-[22px] md:text-[25px]">
        Scaripay
      </p>
    </div>
  );
};

export default Logo;
