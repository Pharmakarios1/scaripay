const WhatScaripayDoesText = ({}) => {
  return (
    <div className={`grid place-content-center px-5`}>
      <h2 className="text-[20px] md:text-[32px] text-[#444C66] font-bold mb-10">
        What can you <br /> do with Scaripay?
      </h2>
      <div className="shadow-md w-full md:max-w-150 max-h-53 p-8 md:p-15  border border-gray-100 rounded-md">
        <h4 className="font-semibold text-orange-400 py-5">
          {" "}
          Airtime & Data Subscription
        </h4>
        <p className="text-sm md:text-base">
          Send Airtime & Internet Data directly to anyone on their phone number
          via Scaripay, and you earn commission & Incentives in real time to
          your Scaripay wallet.
        </p>
      </div>
      {/* <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div> */}
    </div>
  );
};

export default WhatScaripayDoesText;
