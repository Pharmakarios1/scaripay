import { forgotPasswordApi } from "@services/mockApi";
import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onFinish = async (values: { email: string }) => {
    try {
      setLoading(true);

      await forgotPasswordApi(values.email);

      message.success("Reset link sent");

      setSent(true);
    } catch (error) {
      message.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5 text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold">Forgot your password?</h3>

      <p className="text-md">
        Enter your email and we’ll send you a reset link.
      </p>

      {!sent ? (
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Enter your email" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            size="large"
          >
            Send Reset Link
          </Button>

          <div className="mt-4 text-center">
            <Link to="/login">Back to Login</Link>
          </div>
        </Form>
      ) : (
        <div>
          <p className="text-green-600">
            If the email exists, reset instructions were sent.
          </p>

          <Link to="/login">Return to login</Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
