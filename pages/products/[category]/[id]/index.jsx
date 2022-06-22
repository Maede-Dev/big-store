import { Col, Image, Row, Space, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Divider } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import axios from "axios";
import { setBasketItem } from "../../../../redux/actions";
import style from "./style.module.scss";
import { useRouter } from "next/dist/client/router";
import withSizes from "react-sizes";

const SingleProduct = (props) => {
  const colors = [
    { src: "/Images/color1.png", alt: "browncolor" },
    { src: "/Images/color2.png", alt: "honeybrowncolor" },
    { src: "/Images/color3.png", alt: "blackcolor" },
  ];
  const isAuthenticated = useSelector((state) => state.authReducer);
  const { isMobile } = props;
  const router = useRouter();
  const dispatch = useDispatch();
  const [bigerImage, setBigerImage] = useState();
  const [cardData, setCardData] = useState();
  const params = router.query.id;
  // const exampleFound = ExampleList.find(function (node, index) {
  //   if (node.id == router.query.id) return node;
  // });

  const getData = () => {
    axios
      .get(`http://localhost:1337/products/3`)
      .then((res) => setCardData(res.data));
  };

  const handleAddToBasket = () => {
    if (isAuthenticated !== null) {
      dispatch(setBasketItem(cardData));
    } else {
      message.error("you are not log in");
      router.push("/login");
    }
  };

  useEffect(() => {
    getData();
  }, [router?.query?.id]);

  return (
    <Row className={style.singleProduct_container} justify="space-around">
      {/* LeftSidebar */}
      <Col xs={22} sm={22} md={22} lg={11} xl={11} order={1}>
        <Space size="small" className={style.left_side}>
          <div className={style.main_image_box}>
            <Image
              src={
                bigerImage || `http://localhost:1337${cardData?.images[0]?.url}`
              }
              preview={false}
              width={isMobile ? 300 : 500}
              height={isMobile ? 300 : 500}
              alt="card1"
              className={style.main_image}
            />
          </div>

          <div className={style.othersImg}>
            {cardData?.images.map((node, index) => (
              <Image
                key={index}
                src={`http://localhost:1337${node.url}`}
                width={isMobile ? 55 : 100}
                height={isMobile ? 55 : 100}
                preview={false}
                className={style.item_images}
                style={node == bigerImage ? { border: "1px solid #000" } : null}
                alt="card2"
                onClick={() =>
                  setBigerImage(`http://localhost:1337${node.url}`)
                }
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
          <h1 className={style.header_name}>{cardData?.name}</h1>
          <PlusCircleOutlined
            className={style.addToBasket_icon}
            onClick={handleAddToBasket}
          />
        </Space>
        <div className={style.product_description}>{cardData?.description}</div>
        <h1 className={style.price}>$ {cardData?.price}</h1>
        <Row>
          <Rate
            allowHalf
            allowClear
            disabled
            value={4.5}
            style={{ color: "#000" }}
          />
          <span className={style.review}>{cardData?.reviews}</span>
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

        <button className={style.add_button} onClick={handleAddToBasket}>
          Add to basket
        </button>
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
