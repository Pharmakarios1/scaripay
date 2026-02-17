import { useState } from "react";
// import { Button, Form, message } from "antd";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneField: React.FC = () => {
  const [phone, setPhone] = useState<string>("");

  // const handleSubmit = () => {
  //   if (!phone) {
  //     message.error("Please enter a phone number");
  //     return;
  //   }

  //   // Normalize to E.164 format
  //   const formattedPhone = `+${phone}`;

  //   console.log("Submitted phone:", formattedPhone);

  //   message.success("Phone number submitted successfully");
  // };

  return (
    <>
      <PhoneInput
        country="ng"
        containerStyle={{ display: "flex", alignItems: "center", gap: "10px" }}
        value={phone}
        onChange={(value) => setPhone(value)}
        inputStyle={{ width: "100%", height: "40px", alignItems: "center" }}
        placeholder="Enter phone number"
      />
      {/* <Form className="flex! flex-col! md:flex-row! gap-3! w-full!  justify-between">
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
      </Form> */}
    </>
  );
};

export default PhoneField;
