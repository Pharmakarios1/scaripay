import Google from "@assets/Google play store.png";
import Apple from "@assets/Apple Store Icon.png";
const CTA = () => {
  return (
    <div className="bg-[#173AE5] gap-3 rounded-md my-20 items-center justify-center mx-auto md:max-w-100 lg:max-w-150 text-white h-50 p-5 md:p-10 flex flex-col">
      <h2 className="text-base md:text-[24] lg:text-[40px] font-bold ">
        Download the mobile app
      </h2>
      <p className="text-sm md:text-base text-center lg:text-[18px]">
        Get smarter and faster access right on your mobile phone.
      </p>
      <div className="flex justify-between w-full items-center lg:max-w-81">
        <img src={Google} alt="" className="w-25" />
        <img src={Apple} alt="" className="w-25" />
      </div>
    </div>
  );
};

export default CTA;
