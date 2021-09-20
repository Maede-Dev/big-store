import { Carousel, Col, Image, Row } from "antd";

import React from "react";
import style from "./card.module.scss";

const CardItem = (props) => {
  const { imageAlt, imageSrc, name, price, colors, id } = props;

  return (
    <Col xs={24} sm={10} md={7} lg={7} xl={5} className={style.card_container}>
      <Carousel effect="fade" autoplay className={style.card_image}>
        {imageSrc.map((node) => (
          <Image
            key={id}
            alt={imageAlt}
            src={node}
            width="100%"
            height={200}
            className={style.card_image}
          />
        ))}
      </Carousel>
      <Row className={style.products_body}>
        <Col span={24}>
          <h3 className={style.products_name}>{name}</h3>
        </Col>
        <Col span={24}>
          <span className={style.products_color}>
            {colors.map((node) => node + " ")}
          </span>
        </Col>
        <Col span={24} style={{ textAlign: "right" }}>
          <span className={style.products_price}>{price} $</span>
        </Col>
      </Row>
    </Col>
  );
};

export default CardItem;
