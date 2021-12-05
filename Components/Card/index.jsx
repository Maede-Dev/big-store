import { Button, message, Tooltip } from "antd";
import { Carousel, Col, Image, Row } from "antd";

import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import style from "./card.module.scss";
import { setBasketItem } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

const CardItem = (props) => {
  const { images, name, price, colors, id, category } = props;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authReducer);
  const router = useRouter();

  const handleAddToBasket = () => {
    if (isAuthenticated !== null) {
      dispatch(setBasketItem(props));
    } else {
      message.error("you are not log in");
      router.push("/login");
    }
  };

  return (
    <div className={style.card_container}>
      <Link href={`/${category}/${id}`}>
        <>
          <Carousel effect="fade" autoplay className={style.card_image}>
            {images?.map((node) => (
              <Image
                key={id}
                alt="products"
                src={`http://localhost:1337${node.url}`}
                width="100%"
                height={200}
                className={style.card_image}
                preview={false}
              />
            ))}
          </Carousel>
          <Row className={style.products_body} align="middle">
            <Col span={24}>
              <h3 className={style.products_name}>{name}</h3>
            </Col>

            <Col span={19}>
              <span className={style.products_color}>{colors}</span>
            </Col>
            <Col span={5}>
              <span className={style.products_price}>$ {price}</span>
            </Col>
          </Row>
        </>
      </Link>
      <div className={style.button_section}>
        <Tooltip title="Add to Shopping Basket" className={style.add_btn}>
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={handleAddToBasket}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default CardItem;
