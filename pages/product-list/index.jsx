import { Col, Row, Spin } from "antd";

import CardItem from "../../Components/Card";
import ExampleList from "../../Components/hardData/productList";
import ProductListSideBar from "../ProductListSideBar";
import React, { useEffect, useState } from "react";
import style from "./productList.module.scss";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("this is products", products);
  const getProducts = async () => {
    await axios
      .get("http://localhost:1337/products")
      .then((res) => setProducts(res.data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Spin spinning={loading}>
      <Row className={style.cardList_container} justify="space-around">
        {products?.length > 0 ? (
          products?.map((node) => (
            <Col key={node.id} xs={24} sm={10} md={7} lg={7} xl={5}>
              <CardItem
                images={node.images}
                id={node.id}
                name={node.name}
                colors={node.colors}
                price={node.price}
                category={node.category}
              />
            </Col>
          ))
        ) : (
          <div>empty</div>
        )}
      </Row>
    </Spin>
  );
};

export default ProductList;
