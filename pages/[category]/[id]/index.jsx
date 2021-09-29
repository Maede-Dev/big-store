import { Col, Image, Row } from "antd";

import { Divider } from "antd";
import ExampleList from "/Components/hardData/productList";
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
      {/* LeftSidebar */}
      <Col span={10}>
        <Row>
          <Col span={20}>
            <Image
              src="/Images/card1.jpeg"
              preview={false}
              width="500px"
              height="400px"
              className={style.mainImg}
            />
          </Col>
          <Col  xs={24} sm={24} md={7} lg={8} xl={4} xxl={8} className={style.othersImg}>
            <Image
              src="/Images/card1.jpeg"
              preview={false}
              className={style.bagEx1}
            />
            <Image
              src="/Images/card1.jpeg"
              preview={false}
              className={style.bagEx2}
            />
            <Image
              src="/Images/card1.jpeg"
              preview={false}
              className={style.bagEx3}
            />
            <Image
              src="/Images/card1.jpeg"
              preview={false}
              className={style.bagEx4}
            />
          </Col>
        </Row>
        <h1 className={style.recently}>Recently viewed</h1>
      </Col>

      <Divider type="vertical" className={style.divider} />
      {/* RightSidebar */}
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
