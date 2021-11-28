import React, { useEffect } from "react";

import Brands from "../../sections/Brands";
import HomeSlider from "../../sections/homeSlider";
import HomeTop from "../../sections/homeTop";
import axios from "axios";

const HomePageView = () => {
  const getUrl = "http://localhost:1337/products";
  useEffect(() => {
    getData();
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

  const getData = async () => {
    await axios.get(getUrl).then((res) => console.log("this is data", res));
  };

  // const onFinish = (values) => {
  //   const query = {
  //     name: values.name,
  //     phoneNumber: values.number,
  //   };

  //   axios
  //     .post("/ljdflk;ajfl;a/admin", query)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error)).finally(
  //       ....
  //     );
  // };

  return (
    <>
      <HomeTop />
      <HomeSlider />
      <Brands />
    </>
  );
};

export default HomePageView;
