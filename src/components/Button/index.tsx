import { Button } from "antd";
import type { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  type?: "primary" | "text";
  size?: "large";
  className?: string;
  onClick?: () => void;
  htmlType?: "button" | "submit" | "reset";
}

const CustomButton = ({
  title,
  icon,
  size,
  className,
  type,
  onClick,
  htmlType,
}: ButtonProps) => {
  return (
    <Button
      icon={icon}
      size={size}
      className={className}
      type={type}
      onClick={onClick}
      htmlType={htmlType}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
