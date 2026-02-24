import HeroImage from "./_partials/HeroImage";
import HeroTexts from "./_partials/HeroTexts";
const Hero = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2  h-auto">
      <HeroTexts />
      <HeroImage />
    </div>
  );
};

export default Hero;
