import signinlogo from "@assets/phone-validation.png";

const LoginImage = () => {
  return (
     <div className="hidden md:block ">
      <img src={signinlogo} alt="" className="w-full h-screen object-conver" />
    </div>
  );
};

export default LoginImage;
