import { Col, Image, Row } from "antd";

import CardItem from "../../Components/Card";
import ProductListSideBar from "../../Components/ProductListSideBar";
import React from "react";
import style from "./productList.module.scss";

const productList = () => {
  const exampleList = [
    {
      imageAlt: "product1",
      imageSrc: ["/Images/card1.jpeg"],
      name: "bag 1",
      price: "215",
      colors: ["red", "blue", "black"],
      id: 2,
      category: "bag",
    },
    {
      imageAlt: "product2",
      imageSrc: ["/Images/card2.jpg"],
      name: "bag 2",
      price: "165",
      colors: ["red", "blue", "black"],
      id: 2,
      category: "bag",
    },
    {
      imageAlt: "product3",
      imageSrc: ["/Images/card3.jpg"],
      name: "bag 3",
      price: "127",
      colors: ["red", "blue", "black"],
      id: 3,
      category: "bag",
    },
    {
      imageAlt: "product4",
      imageSrc: ["/Images/card4.jpg", "/Images/card3.jpg"],
      name: "bag 4",
      price: "100",
      colors: ["red", "blue", "black"],
      id: 4,
      category: "bag",
    },
    {
      imageAlt: "product5",
      imageSrc: ["/Images/card5.jpg"],
      name: "bag 5",
      price: "79",
      colors: ["red", "blue", "black"],
      id: 5,
      category: "bag",
    },
    {
      imageAlt: "product5",
      imageSrc: ["/Images/card6.jpg"],
      name: "bag 6",
      price: "79",
      colors: ["red", "blue", "black"],
      id: 6,
      category: "bag",
    },
  ];
  return (
    <Row className={style.cardList_container} justify="space-around">
      <Col span={5}>
        <ProductListSideBar />
      </Col>
      <Col span={19}>
        <Row justify="space-around">
          {exampleList.map((node) => (
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
        </Row>
      </Col>
    </Row>
  );
};

export default productList;
