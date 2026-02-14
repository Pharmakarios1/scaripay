import HeroImage from "./_partials/HeroImage";
import HeroTexts from "./_partials/HeroTexts";
const Hero = () => {
  return (
    <div className="container bg-gray-50 flex flex-col md:flex-row items-center lg:items-start  ">
      <HeroTexts />
      <HeroImage />
    </div>
  );
};

export default Hero;
