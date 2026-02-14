import WhatScaripayDoesImage from "./_partials/Image";
import WhatScaripayDoesText from "./_partials/Text";
import img1 from "@assets/Sign Up Page_iphone12prosilver_portrait 1.png";

const WhatScaripayDoes = () => {
  return (
    <div className="bg-white my-20 py-10">
      <div className="grid grid-rotate-2 md:grid-cols-2  gap-10">
        <WhatScaripayDoesText
          className=""
          title="What can you do 
with Scaripay?"
         
        />
        <WhatScaripayDoesImage img={img1} />
      </div>
    </div>
  );
};

export default WhatScaripayDoes;
