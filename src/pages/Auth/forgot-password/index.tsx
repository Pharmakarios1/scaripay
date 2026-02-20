import AuthLayout from "@layouts/AuthLayout";
import SignupImage from "./_partials/InputImage";
import ForgotPassword from "./_partials/InputText";

const ForgotPasswordCOm = () => {
  return (
    <AuthLayout>
      <SignupImage />
      <ForgotPassword />
    </AuthLayout>
  );
};

export default ForgotPasswordCOm;
