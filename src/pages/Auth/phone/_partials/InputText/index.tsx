import CustomButton from "@components/Button";

import { Form, Input } from "antd";

import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface FormData {
  phone: string;
  password: string;
}
const LoginText = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [users, setUsers] = useState<FormData[]>([]);
  const [searchParams] = useSearchParams();
  const phoneTracker = searchParams.get("phone");

  const handleSubmit = (values: FormData) => {
    console.log("Submitted:", values);

    setUsers((prev) => [...prev, values]);
    navigate(`onboarding?phone=${phoneTracker}`);
    users.push(values);
    console.log(users);
    form.resetFields();
  };
  return (
    <div className="space-y-5  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center">
      <h3 className="text-3xl font-bold ">Check your phone</h3>
      <p className="text-md">
        Enter the 4-digit we just sent to {phoneTracker} to continue
      </p>

      <Form form={form} layout="vertical" onFinish={handleSubmit} className="">
        {/* Phone */}
        <Form.Item
          name="otp"
          rules={[
            { required: true, message: "otp is required" },
            {
              validator: (_, value) => {
                if (value && value.length !== 4) {
                  return Promise.reject("OTP must be 4 digits");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input.OTP length={4} size="large" />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <CustomButton
            title="Continue"
            type="primary"
            size="large"
            className="w-fit"
            htmlType="submit"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginText;
