import { Col, Row } from "antd";

import CardItem from "../../Components/Card";
import ExampleList from "../../Components/hardData/productList";
import ProductListSideBar from "../ProductListSideBar";
import React from "react";
import style from "./productList.module.scss";

const productList = () => {

  return (
    <Row className={style.cardList_container} justify="space-around">
      <Col span={3}>
        <ProductListSideBar />
      </Col>
      <Col span={20} style={{ borderLeft: "1px solid #afafaf" }}>
        <Row justify="space-around">
          {ExampleList.map((node) => (
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
