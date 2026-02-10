// import HeroImage from "./_partials/";
import HeroImage from "./_partials/HeroImage";
import HeroTexts from "./_partials/HeroTexts";
const Hero = () => {
  return (
    <div className="bg-gray-50 mt-10 md:mt-30 flex flex-col md:flex-row px-5 items-center md:items-start lg:px-20 ">
      <HeroTexts />
      <HeroImage />
    </div>
  );
};

export default Hero;
