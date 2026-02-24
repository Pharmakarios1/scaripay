import Google from "@assets/Google play store.png";
import Apple from "@assets/Apple Store Icon.png";

const CTA = () => {
  return (
    <div className="bg-[#173AE5] gap-3 rounded-md items-center justify-center mx-auto md:max-w-100 lg:max-w-150 text-white h-50 p-5 md:p-10 flex flex-col">
      <h2 className="text-base md:text-[24] lg:text-[40px] font-bold ">
        Download the mobile app
      </h2>
      <p className="text-sm md:text-base text-center lg:text-[18px]">
        Get smarter and faster access right on your mobile phone.
      </p>
      <div className="flex justify-between w-[70%] items-center lg:max-w-81">
        <a
          href="https://play.google.com/store/apps/details?id=com.yourapp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={Google} alt="" className="w-25" />
        </a>

        <a
          href="https://apps.apple.com/app/id1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img src={Apple} alt="" className="w-25" />
        </a>
      </div>
    </div>
  );
};

export default CTA;
