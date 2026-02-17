import WhatScaripayDoesImage from "./_partials/Image";
import WhatScaripayDoesText from "./_partials/Text";

const WhatScaripayDoes = () => {
  return (
    <div className="bg-orange-50 py-10 lg:">
      <div className="grid grid-rotate-2 md:grid-cols-2  gap-10">
        <WhatScaripayDoesText />
        <WhatScaripayDoesImage />
      </div>
    </div>
  );
};

export default WhatScaripayDoes;
