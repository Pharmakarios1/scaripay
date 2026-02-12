import { Button } from "antd";

const WhyScariText = () => {
  return (
    <div className="flex flex-col flex-start gap-4 w-full md:w-1/2">
      <p className="h-8 grid place-content-center rounded-md text-[#FA7B20] w-fit px-5 bg-[#fff8f4] ">
        Why Scaripay?
      </p>
      <h2 className="text-[36px] md:text-[48px] font-bold w-full md:w-xl text-[#444C66]">
        We believe in Financial Freedom for all.
      </h2>
      <p className="text-[16px] text-[#000000]">
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
