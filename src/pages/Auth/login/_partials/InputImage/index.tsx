import signinlogo from "@assets/Left column with image.png";
import logo from "@assets/icon.png";
const LoginImage = () => {
  return (
    <div className="hidden md:block md:-mx-5 relative">
      <div className="absolute top-5 left-2 flex gap-4 justify-start items-end">
        <img src={logo} alt="logoscaripay" className="w-10 h-10" />
        <p className="text-gray-500 text-3xl font-bold">Scaripay</p>
      </div>
      <img src={signinlogo} alt="" className="h-160 w-120" />
    </div>
  );
};

export default LoginImage;
