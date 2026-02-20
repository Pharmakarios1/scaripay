import CustomButton from "@components/Button";

import { Form, Input, message } from "antd";

import { useNavigate, useSearchParams } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [searchParams] = useSearchParams();
  const phoneTracker = searchParams.get("phone");

  const handleFinish = async (values: any) => {
    if (!phoneTracker) {
      navigate("/signup");
      return;
    }

    try {
      // simulate verification
      if (values.otp === "1234") {
        message.success("OTP Verified");
        navigate("/dashboard");
      } else {
        message.error("Invalid OTP");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };
  return (
    <div className="space-y-5  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center">
      <h3 className="text-3xl font-bold ">Check your phone</h3>
      <p className="text-md">
        Enter the 4-digit we just sent to {phoneTracker} to continue
      </p>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {/* otp*/}
        <Form.Item
          name="otp"
          rules={[{ required: true, message: "Enter OTP" }]}
        >
          <Input.OTP length={4} />
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

export default OTP;
