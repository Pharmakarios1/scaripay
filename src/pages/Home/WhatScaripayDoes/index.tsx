import WhatScaripayDoesImage from "./_partials/Image";
import WhatScaripayDoesText from "./_partials/Text";

const WhatScaripayDoes = () => {
  return (
    <div className="bg-orange-50 py-10 lg:-mx-20">
      <div className="grid  md:grid-cols-2  gap-10 lg:px-20">
        <WhatScaripayDoesText />
        <WhatScaripayDoesImage />
      </div>
    </div>
  );
};

export default WhatScaripayDoes;
