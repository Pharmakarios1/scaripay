import signuplogo from "@assets/left column.png";

const SignupImage = () => {
  return (
    <div className="hidden md:block ">
      <img src={signuplogo} alt="" className="w-full h-screen object-conver" />
    </div>
  );
};

export default SignupImage;
