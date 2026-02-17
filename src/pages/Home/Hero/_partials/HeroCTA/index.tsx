import PhoneField from "@components/PhoneInput";
import { Button } from "antd";

const HeroCTA = () => {
  return (
    <div className="flex items-center flex-col md:flex-row gap-2 h-25 md:h-12 mx-auto">
      <PhoneField />
      <Button
        className="w-full! flex-1! bg-[#173AE5]!"
        type="primary"
        // onClick={handleSubmit}
        block
        size="large"
      >
        Get Started!
      </Button>
    </div>
  );
};

export default HeroCTA;
