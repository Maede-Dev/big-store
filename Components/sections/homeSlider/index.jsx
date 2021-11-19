import { Carousel } from "antd";
import React from "react";
import s from "./style.module.scss";
import ExampleList from "../../hardData/productList";
import CardItem from "../../Card";
import SectionHeader from "../../sectionHeader";
import WithSizes from "react-sizes";

const HomeSlider = (props) => {
  const sliderData = ExampleList.slice(0, 5);
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
          {sliderData.map((node) => (
            <CardItem
              key={node.id}
              imageAlt={node.imageAlt}
              imageSrc={node.imageSrc}
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
