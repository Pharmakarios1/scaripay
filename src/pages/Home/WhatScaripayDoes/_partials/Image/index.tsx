const WhatScaripayDoesImage = ({ img, className }: any) => {
  return (
    <div className={`${className}`}>
      <img src={img} className="w-full md:w-1/2" alt="whatscaripaydoesimage" />
    </div>
  );
};

export default WhatScaripayDoesImage;
