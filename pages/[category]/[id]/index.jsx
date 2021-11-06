import { Col, Image, Row, Space } from "antd";
import React, { useState } from "react";

import { Divider } from "antd";
import ExampleList from "/Components/hardData/productList";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import style from "./style.module.scss";
import { useRouter } from "next/dist/client/router";
import withSizes from "react-sizes";

const SingleProduct = (props) => {
  const { isMobile } = props;
  console.log(isMobile);
  const router = useRouter();

  const exampleFound = ExampleList.find(function (node, index) {
    if (node.id == router.query.id) return node;
  });
  const [bigerImage, setBigerImage] = useState();

  const colors = [
    { src: "/Images/color1.png", alt: "browncolor" },
    { src: "/Images/color2.png", alt: "honeybrowncolor" },
    { src: "/Images/color3.png", alt: "blackcolor" },
  ];
  return (
    <Row className={style.singleProduct_container} justify="space-around">
      {/* LeftSidebar */}
      <Col xs={22} sm={22} md={22} lg={11} xl={11} order={1}>
        <Space size="small" className={style.left_side}>
          <div className={style.main_image_box}>
            <Image
              src={bigerImage || exampleFound?.imageSrc[0]}
              preview={false}
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 500}
              alt="card1"
              className={style.main_image}
            />
          </div>

          <div className={style.othersImg}>
            {exampleFound?.imageSrc.map((node, index) => (
              <Image
                key={index}
                src={node}
                width={isMobile ? 55 : 100}
                height={isMobile ? 55 : 100}
                preview={false}
                className={style.item_images}
                style={node == bigerImage ? { border: "1px solid #000" } : null}
                alt="card2"
                onClick={() => setBigerImage(node)}
              />
            ))}
          </div>
        </Space>
      </Col>

      <Col md={0} lg={1} xl={1} order={2} className={style.divider_box}>
        <Divider type="vertical" className={style.divider} />
      </Col>

      {/* RightSidebar */}
      <Col
        xs={22}
        sm={22}
        md={22}
        lg={11}
        xl={11}
        order={3}
        className={style.right_side}
      >
        <Space size="middle" className={style.header}>
          <h1 className={style.header_name}>{exampleFound?.name}</h1>
          <PlusCircleOutlined  className={style.addToBasket_icon} />
        </Space>
        <div className={style.product_description}>
          {exampleFound?.description}
        </div>
        <h1 className={style.price}>$ {exampleFound?.price}</h1>
        <Row>
          <Rate
            allowHalf
            allowClear
            disabled
            value={4.5}
            style={{ color: "#000" }}
          />
          <span className={style.review}>{exampleFound?.reviews}</span>
        </Row>
        <div className={style.color_name}>Colors</div>
        <div className={style.color_container}>
          {colors?.map((color, index) => (
            <Image
              key={index}
              src={color.src}
              alt={color.alt}
              preview={false}
              className={style.color}
            />
          ))}
        </div>

        <button className={style.add_button}>Add to basket</button>
      </Col>
    </Row>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000 && width > 601,
});

export default withSizes(mapSizesToProps)(SingleProduct);
// export default SingleProduct;
