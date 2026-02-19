import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneFieldProps {
  value?: string;
  onChange?: (value: string) => void;
}

const PhoneField: React.FC<PhoneFieldProps> = ({ value, onChange }) => {
  return (
    <PhoneInput
      country="ng"
      value={value}
      onChange={(phone) => onChange?.(phone)}
      inputStyle={{ width: "100%", height: "40px" }}
      placeholder="Enter phone number"
    />
  );
};

export default PhoneField;
