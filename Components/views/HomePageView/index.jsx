import React, { useEffect } from "react";
import HomeTop from "../../sections/homeTop";
import HomeSlider from "../../sections/homeSlider";
import Brands from "../../sections/Brands";
import axios from "axios";

const HomePageView = () => {
  // const getUrl = "http://localhost:1337/users/1";
  useEffect(() => {
    // axios.get(getUrl).then((res) => console.log("this is res", res.data));
    getUser();
  }, []);
  const getUser = async () => {
    await axios
      .post("http://localhost:1337/auth/local", {
        identifier: "admin@gmail.com",
        password: "bigstore1234",
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <HomeTop />
      <HomeSlider />
      <Brands />
    </>
  );
};

export default HomePageView;
