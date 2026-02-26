import { useNavigate, useSearchParams } from "react-router-dom";
import CustomButton from "@components/Button";
import { Form, Input, message } from "antd";
import { verifyOTP } from "@api/verifyOtp";
import { useAuthStore } from "@store/AuthStore";
import { sendOTP } from "@api/sendOtp";
import { useEffect, useState } from "react";

const OTP = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [otpForDisplay, setOtpForDisplay] = useState<string>("");

  const [searchParams] = useSearchParams();
  const phoneTracker = searchParams.get("phone");

  // 🔹 Send OTP when page loads and store it locally
  useEffect(() => {
    if (!phoneTracker) {
      navigate("/signup");
      return;
    }

    const generateOtp = async () => {
      const otp = await sendOTP(phoneTracker);
      setOtpForDisplay(otp); // show on page
    };

    generateOtp();
  }, [phoneTracker, navigate]);

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
    <div className="space-y-7 text-gray-600 w-full px-8 md:px-16 mx-auto mt-[20%] md:mt-0">
      <h3 className="text-3xl font-bold">Check your phone</h3>
      <p className="text-md">
        Enter the 4-digit code we just sent to {phoneTracker} to continue
      </p>

      {/* 🔹 Display OTP on page for testing */}
      {otpForDisplay && (
        <div className="bg-yellow-100 border border-yellow-100 p-3 text-center rounded-md">
          <p className="text-sm text-gray-700">Mock OTP (for testing)</p>
          <p className="text-2xl font-bold tracking-widest">{otpForDisplay}</p>
        </div>
      )}

      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="otp"
          rules={[{ required: true, message: "Enter OTP" }]}
        >
          <Input.OTP length={4} separator={<span>-</span>} />
        </Form.Item>

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
