import PhoneField from "@components/PhoneInput";

const HeroTexts = () => {
  return (
    <div className=" ">
      <p className="font-bold text-center md:text-start text-[46px] text-[#444C66] leading-12">
        Earn more <span className="text-[#FA7B20]">money</span> <br /> when you{" "}
        <span className="text-blue-700"> pay bills</span>{" "}
      </p>
      <p className="my-10 text-center md:text-start ">
        Scaripay provides you with a simple & smart way to earn <br /> residual
        Income with just your mobile (phone) number
      </p>
      <PhoneField />
    </div>
  );
};

export default HeroTexts;
