import Google from "@assets/Google play store.png";
import Apple from "@assets/Apple Store Icon.png";
import Ussd from "@assets/USSD coming soon.png";
import HeroCTA from "../HeroCTA";

const HeroTexts = () => {
  return (
    <div className="container space-x-6">
      <p className="font-bold text-center md:text-start text-[60px] text-[#444C66] leading-16">
        Earn more <span className="text-[#FA7B20]">money</span> <br /> when you{" "}
        <span className="text-blue-700"> pay bills</span>{" "}
      </p>
      <p className="my-10 text-center md:text-start text-[#444C66] ">
        Scaripay provides you with a simple & smart way to earn <br /> residual
        Income with just your mobile (phone) number
      </p>
      <HeroCTA />
      <div className="flex justify-between w-full md:w-[80%] mt-3">
        <img src={Google} alt="Googledownload" className="h-8" />
        <div className="relative">
          <img src={Apple} alt="appledownload" className="h-8" />

          <img
            src={Ussd}
            alt="ussd"
            className="md:absolute md:top-0.5 md:right-3 md:translate-x-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTexts;
