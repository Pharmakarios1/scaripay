import WhatScaripayDoesImage from "./_partials/Image";
import WhatScaripayDoesText from "./_partials/Text";
import img1 from "@assets/Sign Up_macbookgrey_front 1.png";
import img2 from "@assets/atm.jpg";
const WhatScaripayDoes = () => {
  return (
    <div className="bg-white">
      <h2 className="text-[27px] font-bold mt-20 md:mt-30 pt-10 text-center text-[#444C66]">
        What can you do with Scaripay?
      </h2>
      <div className="grid grid-rotate-2 md:grid-cols-2  gap-5">
        <WhatScaripayDoesImage img={img1} />
        <WhatScaripayDoesText
          className="order-1 md:order-2"
          title="Send, Refill , Trade Airtime & Data"
          comment="Send Airtime & Internet Data directly to anyone on their phone number via Scaripay, and you earn commission & Incentives in real time to your Scaripay wallet. Trade your Airtime (Credit) & Data for Cash in real time"
        />
      </div>
      <div className="grid grid-rotate-2 md:grid-cols-2 gap-5">
        <WhatScaripayDoesImage img={img2} className="order-1 md:order-2 mt-5" />
        <WhatScaripayDoesText
          className="order-2 md:order-1"
          title="Pay Bills"
          comment="Pay for your Electricity bill, Cable TV subscriptions and Other Services conveniently and securely, and also earn commission instantly to your Scaripay "
        />
      </div>
    </div>
  );
};

export default WhatScaripayDoes;
