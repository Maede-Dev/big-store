import { Carousel } from "antd";
import React, { useState, useEffect } from "react";
import s from "./style.module.scss";
import productsList from "../../hardData/productList";
import CardItem from "../../Card";
import SectionHeader from "../../sectionHeader";
import WithSizes from "react-sizes";
import axios from "axios";

const HomeSlider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const getProducts = async () => {
    await axios
      .get("http://localhost:1337/products")
      .then((res) => setProductsList(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const { isTablet, isMobile } = props;
  return (
    <>
      <SectionHeader>Newest Products</SectionHeader>
      <div className={s.slider_container}>
        <Carousel
          slidesToShow={isTablet ? 1 : 4}
          slidesToScroll={1}
          autoplay
          autoplaySpeed="15"
          dots={false}
        >
          {productsList?.slice(0, 7)?.map((node) => (
            <CardItem
              key={node.id}
              images={node.images}
              id={node.id}
              name={node.name}
              colors={node.colors}
              price={node.price}
              category={node.category}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000,
});
export default WithSizes(mapSizesToProps)(HomeSlider);
