import { Col, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import CardItem from "../../../Components/Card";
import axios from "axios";
import style from "./productList.module.scss";
import { FilterOutlined } from "@ant-design/icons";
import ProductListFilter from "../../sections/productListFilter";

const ProductListView = () => {
  const pageSize = 7;
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState();

  const getProducts = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:1337/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(
      products.filter((product) => {
        console.log(product.price >= 160);
      })
    );
    setProducts(products);
  }, [filters]);

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

      <Button onClick={() => setVisible(true)} className={style.showDrawer}>
        <FilterOutlined />
        Filter
      </Button>
      <Drawer
        title="Products Filter"
        placement="left"
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <ProductListFilter setFilters={setFilters} setVisible={setVisible} />
      </Drawer>
    </Spin>
  );
};

export default ProductListView;
