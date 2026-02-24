import { Input } from "antd";
interface InputProps {
  // title: string;
  // icon?: string;
  placeholder: string;
  type?: "email" | "password" | "text";
  size?: "large";
  className?: string;
  onChange?: () => void;
  name?: string;
}
const InputField = ({
  size,
  className,
  type,
  placeholder,
  onChange,
  name,
}: InputProps) => {
  return (
    <Input
      size={size}
      className={className}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
