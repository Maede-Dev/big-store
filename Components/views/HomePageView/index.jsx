import React, { useEffect } from "react";
import HomeTop from "../../sections/homeTop";
import HomeSlider from "../../sections/homeSlider";
import Brands from "../../sections/Brands";
import axios from "axios";

const HomePageView = () => {
  const getUrl = "http://localhost:1337/products";
  useEffect(() => {
    axios.get(getUrl).then((res) => console.log("this is res", res.data));
  }, []);
  return (
    <>
      <HomeTop />
      <HomeSlider />
      <Brands />
    </>
  );
};

export default HomePageView;
