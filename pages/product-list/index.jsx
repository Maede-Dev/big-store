import { Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";

import CardItem from "../../Components/Card";
import axios from "axios";
import style from "./productList.module.scss";

const ProductList = () => {
  const pageSize = 7;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("products length", products.length);

  const getProducts = async () => {
    await axios
      .get("http://localhost:1337/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Spin spinning={loading}>
      <Row className={style.cardList_container} justify="space-around">
        {products?.length > 0 ? (
          products?.slice(0, pageSize * page)?.map((node) => (
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

      {/* if total(products length) is more/equal than page*pageSize then ... */}
      {products?.length > 9 && products.length >= page * pageSize && (
        <div className={style.showMore} onClick={() => setPage(page + 1)}>
          show more
        </div>
      )}
    </Spin>
  );
};

export default ProductList;
