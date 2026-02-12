import WhyScaripayImage from "./_partials/WhyImage";
import WhyScariText from "./_partials/WhyText";

const WhyScaripay = () => {
  return (
    <div className="flex py-10 justify-between flex-col-reverse md:flex-row gap-5 bg-white">
      <WhyScaripayImage />
      <WhyScariText />
    </div>
  );
};

export default WhyScaripay;
