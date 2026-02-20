import CustomButton from "@components/Button";
import PhoneField from "@components/PhoneInput";
import router from "@utils/router.util";
import { Form } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  phone: string;
  password: string;
}
const LoginText = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [users, setUsers] = useState<FormData[]>([]);
  const handleSubmit = (values: FormData) => {
    console.log("Submitted:", values);

    setUsers((prev) => [...prev, values]);
    users.push(values);
    console.log(users);
    form.resetFields();
  };
  return (
    <div className="space-y-5  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center">
      <h3 className="text-3xl font-bold ">Welcome Back</h3>
      <p className="text-xl">Sign in to continue</p>

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

export default LoginText;
