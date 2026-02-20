import img1 from "@assets/Smartphone.png";
import img2 from "@assets/TV.png";
import img3 from "@assets/Trade.png";
import img4 from "@assets/Group 12.png";
import img5 from "@assets/Money.png";
const WhatScaripayDoesText = ({}) => {
  const scaripayFunction = [
    { icon: img2, text: "Cable TV, Electricity & Other Subscription" },
    { icon: img3, text: "Trade Airtime, Internet Data & Money" },
    { icon: img4, text: "Borrow Airtime, Internet Data & Money" },
    { icon: img5, text: "Send & Receive Money" },
  ];
  return (
    <div className={`container grid place-content-center px-5`}>
      <h2 className="text-[20px] md:text-[32px] text-[#444C66] font-bold mb-5">
        What can you <br /> do with Scaripay?
      </h2>
      <div className="container shadow-md w-full md:max-w-fit max-h-fit p-5 border border-gray-100 rounded-md">
        <div className="flex items-center gap-2.5">
          <div className="min-w-8 h-8 rounded-full bg-orange-200 gap-2 grid place-content-center">
            <img src={img1} alt="" className="w-3 h-4" />
          </div>
          <h4 className="font-semibold text-orange-400 my-2">
            Airtime & Data Subscription
          </h4>
        </div>
        <p className="text-sm md:text-base text-gray-600">
          Send Airtime & Internet Data directly to anyone on their phone number
          via Scaripay, and you earn commission & Incentives in real time to
          your Scaripay wallet.
        </p>
      </div>
      <div className="my-5">
        {scaripayFunction.map((scariItem, idx) => (
          <ul key={idx} className="my-2 space-y-10">
            <li className="container flex place-items-center text-[#444C66] gap-5 space-y-5 pl-5">
              <div className="w-8 h-8 shrink-0 rounded-full bg-orange-200 gap-2 grid place-content-center">
                <img src={scariItem.icon} alt="" className="w-3 h-4" />
              </div>
              <span className="text-sm md:text-base"> {scariItem.text}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default WhatScaripayDoesText;
