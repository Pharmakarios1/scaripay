import { Input } from "antd";
interface InputProps {
  // title: string;
  // icon?: string;
  placeholder: string;
  type?: "email" | "password" | "text";
  size?: "large";
  className?: string;
}
const CustomInput = ({ size, className, type, placeholder }: InputProps) => {
  return (
    <Input
      size={size}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
