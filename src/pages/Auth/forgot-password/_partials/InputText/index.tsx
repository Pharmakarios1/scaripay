import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onFinish = async (values: { email: string }) => {
    try {
      setLoading(true);

      // 🔁 Replace with your real API call
      // await fakeForgotPassword(values.email);
      console.log(values);

      setSent(true);
    } catch (error) {
      message.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold ">Forgot your password?</h3>
      <p className="text-md">
        Enter your email and we’ll send you a reset link.
      </p>

      {!sent ? (
        <Form layout="vertical" onFinish={onFinish} className="mt-6">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input placeholder="example@email.com" size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
            size="large"
          >
            Send Reset Link
          </Button>

          <div className="mt-4 text-center">
            <Link to="/login">Back to Login</Link>
          </div>
        </Form>
      ) : (
        <div className="mt-6">
          <p>If an account exists with this email, we’ve sent a reset link.</p>
          <div className="mt-4">
            <Link to="/login">Return to Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
