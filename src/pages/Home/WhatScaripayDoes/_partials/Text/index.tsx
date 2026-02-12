interface TextProps {
  title: string;
  comment: string;
  className: string;
}

const WhatScaripayDoesText: React.FC<TextProps> = ({
  title,
  comment,
  className,
}) => {
  return (
    <div className={`grid place-content-center ${className}`}>
      <h2 className="text-[32px] text-[#1029A2] font-bold">{title}</h2>
      <p className="text-[#444C66] text-[16px] leading-6">{comment}</p>
    </div>
  );
};

export default WhatScaripayDoesText;
