import HeroImage from "./_partials/HeroImage";
import HeroTexts from "./_partials/HeroTexts";
const Hero = () => {
  return (
    <div className="bg-gray-50 pt-10 md:pt-30 flex flex-col lg:flex-row gap-10 px-5 items-center lg:items-start lg:px-20 ">
      <HeroTexts />
      <HeroImage />
    </div>
  );
};

export default Hero;
