import { Col, Image, Row } from "antd";

import { Divider } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import React from "react";
import style from "./style.module.scss";
import { useRouter } from "next/dist/client/router";

const SingleProduct = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Row className={style.singleProduct_container} justify="space-around">
      <Col span={10}>
        <Image src="/Images/card1.jpeg" width="100%" height="100%"></Image>
      </Col>
      <Divider type="vertical" className={style.divider} />
      <Col span={10}>
        <Row className={style.header}>
          <Col span={20}>
            <h1 className={style.header_name}> bag1</h1>
          </Col>
          <Col span={4} className={style.like_container}>
            <HeartOutlined className={style.like_icon} />
          </Col>
        </Row>
        <p>Classic Double Flap Bag Quilted Caviar Medium</p>
        <h1 className={style.price}>$ 736.99</h1>
        <Row>
          <Rate allowHalf allowClear />
          <span className={style.review}>785 reviews</span>
        </Row>
        <span className={style.color_name}>Colour</span>
        <div className={style.color_container}>
          <Image
            src="/Images/color1.png"
            alt="browncolor"
            preview={false}
            className={style.color1}
          />
          <Image
            src="/Images/color2.png"
            alt="honeybrowncolor"
            preview={false}
            className={style.color2}
          />
          <Image
            src="/Images/color3.png"
            alt="blackcolor"
            preview={false}
            className={style.color3}
          />
        </div>

        <button className={style.add_button}>Add to basket</button>
      </Col>
    </Row>
  );
};

export default SingleProduct;
