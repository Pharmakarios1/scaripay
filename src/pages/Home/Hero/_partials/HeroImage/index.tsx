import Happyguy from "@assets/Happy-guy 1.png";
import Happyguy2x from "@assets/Happy-guy 1@2x.png";
const HeroImage = () => {
  // const isMobile = useMobile();
  return (
    <div className="relative flex items-center justify-center w-full object-contain px-0!">
      <div className="absolute top-[30%] left-1/2 translate-x-[-50%] -translate-y-[60%] lg:-translate-y-[60%] w-48 h-48 lg:w-80 lg:h-80  bg-[#fff5d1] rounded-full mix-blend-multiply filter animate-blob "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[-20%] -translate-y-[30%]  w-36 h-36 lg:w-60 lg:h-60  bg-[#e8f0fe] rounded-full mix-blend-multiply filter animate-pulse"></div>
      <div className="z-10 ">
        <img
          src={Happyguy}
          srcSet={`${Happyguy} 1x, ${Happyguy2x} 2x`}
          alt="HeroIcondisplay"
          className={`w-full max-w-100 md:max-w-150 object-contain drop-shadow-2xl`}
        />
      </div>
    </div>
  );
};

export default HeroImage;
