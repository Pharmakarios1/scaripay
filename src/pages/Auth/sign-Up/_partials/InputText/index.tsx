import CustomButton from "@components/Button";
import CustomInput from "@components/Input";
import PhoneField from "@components/PhoneInput";

const SignupText = () => {
  return (
    <div className="space-y-5 my-10 md:my-0">
      <h3 className="text-3xl font-bold">Get Started</h3>
      <p className="text-xl">Let’s know you better</p>
      <PhoneField />
      <CustomInput />
      <CustomInput />
      <CustomButton title="Sign Up" type="primary" size="large" className="w-full!" />
    </div>
  );
};

export default SignupText;
