import signuplogo from "@assets/left column.png";
const SignupImage = () => {
  return (
    <div className="hidden md:block md:-mx-5 ">
      <img src={signuplogo} alt="" className="h-140 w-120" />
    </div>
  );
};

export default SignupImage;
