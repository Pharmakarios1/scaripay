import signinlogo from "@assets/phone-validation.png";
import logo from "@assets/icon.png";
const LoginImage = () => {
  return (
    <div className="hidden md:block md:-mx-5 relative">
      <div className="absolute top-5 left-5 flex gap-4 justify-start items-end">
        <img src={logo} alt="logoscaripay" className="w-8 h-8" />
        <p className="text-gray-500 text-md font-bold">Scaripay</p>
      </div>
      <img src={signinlogo} alt="" className="h-screen w-120" />
    </div>
  );
};

export default LoginImage;
