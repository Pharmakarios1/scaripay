import AuthLayout from "@layouts/AuthLayout";
import SignupText from "./_partials/InputText";
import SignupImage from "./_partials/InputImage";

const Otp = () => {
  return (
    <AuthLayout>
      <SignupImage />
      <SignupText />
    </AuthLayout>
  );
};

export default Otp;
