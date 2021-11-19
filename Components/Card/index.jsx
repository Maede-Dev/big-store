import { Button, Tooltip } from "antd";
import { Carousel, Col, Image, Row } from "antd";

import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import style from "./card.module.scss";

const CardItem = (props) => {
  const { imageAlt, imageSrc, name, price, colors, id, category } = props;

  return (
    <Link href={`/${category}/${id}`}>
      <div className={style.card_container}>
        <>
          <Carousel effect="fade" autoplay className={style.card_image}>
            {imageSrc.map((node) => (
              <Image
                key={id}
                alt={imageAlt}
                src={node}
                width="100%"
                height={200}
                className={style.card_image}
                preview={false}
              />
            ))}
          </Carousel>
          <Row className={style.products_body}>
            <Col span={24}>
              <h3 className={style.products_name}>{name}</h3>
            </Col>

            <Col span={24} className={style.colcards}>
              <span className={style.products_color}>
                {colors.map((node) => node + " ")}
              </span>
              <span className={style.products_price}>$ {price}</span>
            </Col>
            <Col span={24} className={style.colcards}>
              <Tooltip title="Add to Shopping Basket" className={style.add_btn}>
                <Button type="primary" shape="round" icon={<PlusOutlined />} />
              </Tooltip>
            </Col>
          </Row>
        </>
      </div>
    </Link>
  );
};

export default CardItem;
