import HomeLayout from "@layouts/HomeLayout";
import Hero from "./Hero";
import WhyScaripay from "./WhyScaripay";
import WhatScaripayDoes from "./WhatScaripayDoes";
import CTA from "./CTA";

const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <WhyScaripay />
      <WhatScaripayDoes />
      <CTA />
    </HomeLayout>
  );
};

export default Home;
