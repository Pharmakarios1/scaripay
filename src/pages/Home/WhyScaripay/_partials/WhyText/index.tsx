import { Button } from "antd";

const WhyScariText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-start flex-start gap-4 w-full md:max-w-1/2">
      <p className="h-8 grid place-content-center rounded-xl text-[#FA7B20] w-fit px-4 bg-[#fcece3] ">
        Why Scaripay?
      </p>
      <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-bold w-full md:leading-14 text-[#444C66]">
        We believe in Financial Freedom for all.
      </h2>
      <p className="text-sm sm:text-[16px] text-[#444C66]">
        Scaripay believes that most Africans lack access to financial services,
        mainly because they lack income and not the other way round. So, to
        effectively bank the unbanked, we saw the key problem and create a
        solution that helps people generate and earn more residual income in
        real-time.
      </p>
      <Button type="primary" size="large" className="w-fit!">
        Learn More
      </Button>
    </div>
  );
};

export default WhyScariText;
