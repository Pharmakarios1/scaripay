import Google from "@assets/Google play store.png";
import Apple from "@assets/Apple Store Icon.png";
import Ussd from "@assets/USSD coming soon.png";
import HeroCTA from "../HeroCTA";

const HeroTexts = () => {
  return (
    <div className="space-x-6 h-full md:mr-10">
      <p className="font-bold text-center md:text-start text-[60px] text-[#444C66] leading-16">
        Earn more <span className="text-[#FA7B20]">money</span> <br /> when you{" "}
        <span className="text-blue-700"> pay bills</span>{" "}
      </p>
      <p className="my-10 text-center md:text-start text-[#444C66] ">
        Scaripay provides you with a simple & smart way to earn residual Income
        with just your mobile (phone) number
      </p>
      <HeroCTA />
      <div className="grid grid-cols-6 items-center my-5">
        <a
          href="https://play.google.com/store/apps/details?id=com.scaripay"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4"
        >
          <img src={Google} alt="Googledownload" className="h-8 " />
        </a>
        <a
          href="https://apps.apple.com/app/id1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1"
        >
          <img src={Apple} alt="appledownload" className="h-8 " />
        </a>

        <img src={Ussd} alt="ussd" className="col-span-1" />
      </div>
    </div>
  );
};

export default HeroTexts;
