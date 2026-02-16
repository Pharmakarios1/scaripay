interface ButtonProps {
  title: string;
  icon?: string;
  size?: "large" | " medium " | "small";
  className?: string;
}

const Button = ({ title, icon, size, className }: ButtonProps) => {
  return <Button icon={icon} size={size} className={className} title={title} />;
};

export default Button;
