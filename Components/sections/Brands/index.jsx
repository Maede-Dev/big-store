import { Col, Row } from "antd";
import React from "react";
import SectionHeader from "../../sectionHeader";
import Image from "next/image";
import s from "./style.module.scss";
import WithSizes from "react-sizes";

const Brands = (props) => {
  const { isMobile } = props;
  const brandsUrls = [
    "/Images/brands/balenciaga.png",
    "/Images/brands/michael.png",
    "/Images/brands/chanel.jpg",
    "/Images/brands/hermes.jpg",
    "/Images/brands/gucci.jpg",
    "/Images/brands/katespade.jpg",
  ];
  return (
    <>
      <SectionHeader>Our Brands</SectionHeader>
      <Row justify={isMobile ? "center" : "space-around"}>
        {brandsUrls.map((item, index) => (
          <Col xs={22} md={11} lg={7} key={index} className={s.brands_box}>
            <Image
              src={item}
              width={300}
              height={300}
              alt="brands"
              className={s.brands_image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000,
});
export default WithSizes(mapSizesToProps)(Brands);
