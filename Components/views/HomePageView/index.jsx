import React, { useEffect } from "react";

import Brands from "../../sections/Brands";
import HomeSlider from "../../sections/homeSlider";
import HomeTop from "../../sections/homeTop";

const HomePageView = () => {
  return (
    <>
      <HomeTop />
      <HomeSlider />
      <Brands />
    </>
  );
};

export default HomePageView;
