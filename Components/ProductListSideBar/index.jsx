import React from "react";
import { Select } from "antd";
import style from "./style.module.scss";

const { Option } = Select;

const ProductListSideBar = () => {
  const prices = [25, 45, 2.5, 85.2, 78];

  return (
    <div className={style.sidebar_container}>
      <Select className={style.select} placeholder="$ price" allowClear>
        {prices.map((price, index) => (
          <Option key={index} value={price}>
            $ {price}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default ProductListSideBar;
