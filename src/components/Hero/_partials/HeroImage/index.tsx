import HeroHappyguy from "@assets/Happy-guy 1.png";

const HeroImage = () => {
  // const isMobile = useMobile();
  return (
    <div className="relative flex items-center justify-center md:w-1/2 lg:-translate-x-[-20%] ">
      <div className="absolute top-[30%] left-1/2 translate-x-[-70%] -translate-y-[60%] w-60 h-60 md:w-80 md:h-80 bg-[#fff5d1] rounded-full mix-blend-multiply filter animate-blob "></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-[-5%] -translate-y-[30%] w-60 h-60 md:w-76 md:h-76 bg-[#e8f0fe] rounded-full mix-blend-multiply filter animate-pulse"></div>
      <div className="relative z-10 flex justify-center items-center ">
        <img
          src={HeroHappyguy}
          srcSet="/src/assets/Happy-guy 1.png x1, /src/assets/Happy-guy 1@2x.png x2"
          alt="HeroIcondisplay"
          className={`w-full max-w-100 md:max-w-150 object-contain drop-shadow-2xl`}
        />
      </div>
    </div>
  );
};

export default HeroImage;
