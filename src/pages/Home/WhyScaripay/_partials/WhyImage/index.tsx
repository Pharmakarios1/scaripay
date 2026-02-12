import img1 from "@assets/Rectangle 77.png";
import img2 from "@assets/Rectangle 78.png";
import img3 from "@assets/Rectangle 80.png";
import img4 from "@assets/Rectangle 81.png";
const WhyScaripayImage = () => {
  return (
    <div className="relative grid grid-rows-2 w-full h-auto overflow-hidden lg:overflow-visible">
      <div className="grid grid-cols-2 h-auto">
        <img
          src={img1}
          alt="whyscaripay_images"
          className="w-1/2 md:w-[70%]  h-full  "
        />
        <img
          src={img2}
          alt="whyscaripay_images"
          className="absolute top-0 right-0 md:top-20 lg:top-30 w-[68%] md:w-[60%] lg:w-1/2 lg:right-20 "
        />
      </div>
      <div className="grid grid-cols-2 mt-6 md:mt-2">
        <img
          src={img3}
          alt="whyscaripay_images"
          className=" absolute right-0 lg:right-28 lg:w-[30%] "
        />
        <img
          src={img4}
          alt="whyscaripay_images"
          className="absolute w-[60%] h-auto md:w-1/2 "
        />
      </div>
    </div>
  );
};

export default WhyScaripayImage;
