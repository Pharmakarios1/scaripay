import { useState } from "react";
import { Button, Form, message } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Google from "@assets/Google play store.png";
import Apple from "@assets/Apple Store Icon.png";
import Ussd from "@assets/USSD coming soon.png";
const PhoneField: React.FC = () => {
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = () => {
    if (!phone) {
      message.error("Please enter a phone number");
      return;
    }

    // Normalize to E.164 format
    const formattedPhone = `+${phone}`;

    console.log("Submitted phone:", formattedPhone);

    message.success("Phone number submitted successfully");
  };

  return (
    <>
      <Form className="flex! flex-col! md:flex-row! gap-3! w-full!  justify-between">
        <Form.Item required>
          <PhoneInput
            country="ng"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{ width: "100%", height: "40px", flexBasis: 1 }}
            placeholder="Enter phone number"
          />
        </Form.Item>

        <Form.Item>
          <Button
            className="h-10! w-full! flex-1! bg-[#173AE5]!"
            type="primary"
            onClick={handleSubmit}
            block
          >
            Get Started!
          </Button>
        </Form.Item>
      </Form>

      <div className="flex justify-between w-full md:w-[80%]">
        <img src={Google} alt="Googledownload" className="h-8" />
        <div className="relative">
          <img src={Apple} alt="appledownload" className="h-8" />

          <img
            src={Ussd}
            alt="ussd"
            className="md:absolute md:top-0.5 md:right-3 md:translate-x-full"
          />
        </div>
      </div>
    </>
  );
};

export default PhoneField;
