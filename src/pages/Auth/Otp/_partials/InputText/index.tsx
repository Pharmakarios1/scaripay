import { useNavigate, useSearchParams } from "react-router-dom";
//component
import CustomButton from "@components/Button";
import { Form, Input, message } from "antd";
import { verifyOTP } from "@api/verifyOtp";
import { useAuthStore } from "@store/AuthStore";
//api and zustand

const OTP = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [searchParams] = useSearchParams();
  const phoneTracker = searchParams.get("phone");

  const handleFinish = async (values: { otp: string }) => {
    if (!phoneTracker) {
      navigate("/signup");
      return;
    }

    try {
      const user = await verifyOTP(phoneTracker, values.otp);

      // store user session
      useAuthStore.getState().setUser(user);

      message.success("Phone verified successfully");

      navigate("/dashboard");
    } catch (error: any) {
      message.error(error.message || "Invalid OTP");
    }
  };
  return (
    <div className="space-y-7  text-gray-600 w-full px-8 md:px-16 mx-auto place-content-center mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold ">Check your phone</h3>
      <p className="text-md">
        Enter the 4-digit {} we just sent to {phoneTracker} to continue
      </p>

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        {/* otp*/}
        <Form.Item
          name="otp"
          rules={[{ required: true, message: "Enter OTP" }]}
        >
          <Input.OTP length={4} separator={<span>-</span>} />
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
