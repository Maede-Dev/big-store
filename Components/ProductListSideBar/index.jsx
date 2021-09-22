import React from "react";
import { Select } from 'antd';
import style from "./style.module.scss";

const { Option } = Select;

const ProductListSideBar = () => {
  
  return <div className={style.sidebar_container}>
  <Select className={style.select} placeholder="$ price">
  <Option value="price">$ 25</Option>
    <Option value="price">$ 52.5</Option>
    <Option value="price">$ 2.58</Option>
    <Option value="price">$ 8.96</Option>
    <Option value="price">$ 5</Option>
    <Option value="price">$ 78</Option>
  </Select>
  </div>;
};

export default ProductListSideBar;
