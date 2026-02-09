import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 600;

const useMobile = (): boolean => {
  const [mobileView, setMobileView] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.innerWidth <= MOBILE_BREAKPOINT
      : false,
  );

  useEffect(() => {
    const handleResize = (): void => {
      setMobileView(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    // run once on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return mobileView;
};

export default useMobile;
