import CustomButton from "@components/Button";
import CustomInput from "@components/Input";
import PhoneField from "@components/PhoneInput";
import router from "@utils/router.util";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

const SignupText = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-5 my-10 md:my-15 text-gray-600 w-full md:w-120">
      <h3 className="text-3xl font-bold ">Welcome Back</h3>
      <p className="text-xl">Sign in to continue</p>

      <Form className="">
        <Form.Item>
          <PhoneField />
        </Form.Item>

        <Form.Item>
          <CustomInput
            size="large"
            type="password"
            placeholder="Enter password"
          />
        </Form.Item>

        <Form.Item>
          <CustomButton
            title="Sign Up"
            type="primary"
            size="large"
            className="w-full!"
          />
        </Form.Item>
        <div className="text-center">
          New user?
          <a
            className="px-2"
            onClick={() => router({ navigate, route: "/signup" })}
          >
            Create account
          </a>
        </div>
      </Form>
    </div>
  );
};

export default SignupText;
