import { resetPasswordApi } from "@services/mockApi";
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
    if (!token) {
      message.error("Invalid reset link");
      return;
    }

    if (values.password !== values.confirmPassword) {
      return message.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await resetPasswordApi(token, values.password);

      message.success("Password reset successful");

      navigate("/login");
    } catch (error: any) {
      message.error(error.message || "Reset failed");

      navigate("/forgot-password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5 text-gray-600 w-full px-8 md:px-16 mx-auto mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold">Reset Password</h3>

      <p>Enter your new password</p>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="New Password"
          name="password"
          rules={[{ required: true }, { min: 6 }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          block
          size="large"
        >
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
