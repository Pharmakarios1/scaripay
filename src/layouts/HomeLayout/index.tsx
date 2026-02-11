import Footer from "@components/Footer/index.";
import Header from "@components/Header";
import type { ReactNode } from "react";

interface HomepageProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomepageProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-50  ">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
