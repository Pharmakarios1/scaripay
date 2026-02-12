import HomeLayout from "@layouts/HomeLayout";
import Hero from "./Hero";
import WhyScaripay from "./WhyScaripay";
import WhatScaripayDoes from "./WhatScaripayDoes";

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <WhyScaripay />
      <WhatScaripayDoes />
    </HomeLayout>
  );
};

export default Home;
