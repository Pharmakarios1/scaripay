import { register } from "@api/register";
import { sendOTP } from "@api/sendOtp";
import CustomButton from "@components/Button";
import InputField from "@components/Input";
import PhoneField from "@components/PhoneInput";
import router from "@utils/router.util";
import { Form } from "antd";
import Password from "antd/es/input/Password";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface FormData {
  phone: string;
  email: string;
  password: string;
  referralcode?: string;
}

const SignupForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();
  const [inviteCode, setInviteCode] = useState(false);

  const handleInviteCode = () => {
    setInviteCode((prev) => !prev);
  };

  useEffect(() => {
    const invite = searchParams.get("invite");

    if (invite) {
      form.setFieldsValue({ referralcode: invite });
      setInviteCode(true);
    }
  }, []);

  const handleSubmit = async (values: FormData) => {
    try {
      await register(
        values.phone,
        values.email,
        values.password,
        values.referralcode,
      );

      await sendOTP(values.phone);

      navigate(`/otp?phone=${encodeURIComponent(values.phone)}`);

      form.resetFields();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="space-y-5 text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold">Get Started</h3>
      <p className="text-xl">Let’s know you better</p>

      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Phone */}
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Phone number is required" },
            {
              validator: (_, value) => {
                if (value && value.length !== 13) {
                  return Promise.reject("Phone must be 10 digits ");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <PhoneField />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <InputField size="large" type="email" placeholder="Enter Email" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Minimum 6 characters" },
          ]}
        >
          <Password size="large" type="password" placeholder="Enter password" />
        </Form.Item>

        {/* Invite Toggle */}
        <Form.Item>
          <span
            className="text-blue-600 cursor-pointer"
            onClick={handleInviteCode}
          >
            Got an invite code?
          </span>
        </Form.Item>

        {/* Invite Code Field */}
        {inviteCode && (
          <Form.Item name="referralcode">
            <InputField
              size="large"
              type="text"
              placeholder="Enter invite code"
            />
          </Form.Item>
        )}

        {/* Submit */}
        <Form.Item>
          <CustomButton
            title="Sign Up"
            type="primary"
            size="large"
            className="w-full!"
            htmlType="submit"
          />
        </Form.Item>

        {/* Navigation */}
        <div className="text-center">
          Got an account?
          <span
            className="px-2 cursor-pointer text-blue-600"
            onClick={() => router({ navigate, route: "/signin" })}
          >
            Sign In
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
