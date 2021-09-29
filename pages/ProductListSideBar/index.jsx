import React from "react";
import { Col, Row, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import style from "./style.module.scss";

const { Option } = Select;

const ProductListSideBar = () => {
  const prices = [25, 45, 2.5, 85.2, 78];

  return (
    <div className={style.sidebar_container}>
      <Row justify="center" align="middle">
        <Col span={8} className={style.sidebar_header_container}>
          <FilterOutlined />
          <span className={style.sidebar_header}>Filters</span>
        </Col>
        <Col span={21}>
          <Select
            size="middle"
            mode="multiple"
            maxTagCount="responsive"
            className={style.select}
            placeholder="$ Price"
            allowClear
          >
            {prices.map((price, index) => (
              <Option key={index} value={price}>
                $ {price}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
    </div>
  );
};

export default ProductListSideBar;
