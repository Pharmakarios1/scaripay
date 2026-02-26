import AuthLayout from "@layouts/AuthLayout";
import SignupImage from "./_partials/InputImage";
import SignupForm from "./_partials/InputText";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignupImage />
      <SignupForm />
    </AuthLayout>
  );
};

export default SignUp;
