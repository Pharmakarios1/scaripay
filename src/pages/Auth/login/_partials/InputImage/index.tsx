import signinlogo from "@assets/Left column with image.png";

const LoginImage = () => {
  return (
    <div className="hidden md:block ">
      <img src={signinlogo} alt="" className="w-full h-screen object-conver" />
    </div>
  );
};

export default LoginImage;
