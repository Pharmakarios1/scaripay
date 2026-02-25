// ResetPassword.tsx
import { Form, Input, Button, message } from "antd";

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    password: string;
    confirmPassword: string;
  }) => {
    if (values.password !== values.confirmPassword) {
      return message.error("Passwords do not match");
    }

    try {
      setLoading(true);

      // 🔁 Replace with real API
      // await fakeResetPassword(token!, values.password);
      console.log(token);

      message.success("Password reset successful!");
      navigate("/login");
    } catch (error) {
      message.error("Reset link expired or invalid.");
      navigate("/forgot-password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold ">Reset Password</h3>
      <p className="text-md">Enter your new password below.</p>

      <Form layout="vertical" onFinish={onFinish} className="mt-6">
        <Form.Item
          label="New Password"
          name="password"
          rules={[
            { required: true, message: "Enter your new password" },
            { min: 6, message: "Minimum 6 characters" },
          ]}
        >
          <Input.Password placeholder="New password" size="large" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Confirm your password" }]}
        >
          <Input.Password placeholder="Confirm password" size="large" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          size="large"
        >
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
