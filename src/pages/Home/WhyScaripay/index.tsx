import WhyScaripayImage from "./_partials/WhyImage";
import WhyScariText from "./_partials/WhyText";

const WhyScaripay = () => {
  return (
    <div className="flex py-10 md:py-20 justify-between flex-col-reverse md:flex-row gap-10 bg-white lg:-mx-20 lg:px-20  rounded-md">
      <WhyScaripayImage />
      <WhyScariText />
    </div>
  );
};

export default WhyScaripay;
