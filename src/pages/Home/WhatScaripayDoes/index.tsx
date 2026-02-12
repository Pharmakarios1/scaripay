import WhatScaripayDoesImage from "./_partials/Image";
import WhatScaripayDoesText from "./_partials/Text";

const WhatScaripayDoes = () => {
  return (
    <>
      <h2 className="text-[27px] font-bold mt-20 md:mt30 text-center text-[#444C66]">
        What can you do with Scaripay?
      </h2>
      <div className="grid grid-rotate-2 md:grid-cols-2 ">
        <WhatScaripayDoesImage />
        <WhatScaripayDoesText />
      </div>
    </>
  );
};

export default WhatScaripayDoes;
