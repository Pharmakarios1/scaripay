import { Button } from "antd";

interface ButtonProps {
  title: string;
  icon?: string;
  type?: "primary" | "text";
  size?: "large";
  className?: string;
}

const CustomButton = ({ title, icon, size, className, type }: ButtonProps) => {
  return (
    <Button icon={icon} size={size} className={className} type={type}>
      {title}
    </Button>
  );
};

export default CustomButton;
