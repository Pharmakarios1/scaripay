import AuthLayout from "@layouts/AuthLayout";
import SignupText from "./_partials/InputText";
import SignupImage from "./_partials/InputImage";

const PhoneValidation = () => {
  return (
    <AuthLayout>
      <SignupImage />
      <SignupText />
    </AuthLayout>
  );
};

export default PhoneValidation;
