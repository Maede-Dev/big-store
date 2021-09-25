import { Col, Input, Row, Space, Table } from "antd";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import React from "react";
import style from "./shoppingBasket.module.scss";

const { Search } = Input;
const ShoppingBasket = () => {
  const deleteHandler = () => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, record) => (
        <Space size="middle">
          {record.price}
          <DeleteOutlined
            onClick={deleteHandler}
            className={style.DeleteIcon}
          />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "bag1",
      quantity: "5",
      price: "$ 215",
    },
    {
      key: "2",
      name: "bag2",
      quantity: "5",
      price: "$ 165",
    },
    {
      key: "3",
      name: "bag3",
      quantity: "5",
      price: "$ 127",
    },
    {
      key: "4",
      name: "bag4",
      quantity: "5",
      price: "$ 100",
    },
    {
      key: "5",
      name: "bag5",
      quantity: "5",
      price: "$ 874",
    },
    {
      key: "6",
      name: "bag6",
      quantity: "5",
      price: "$ 794",
    },
  ];

  return (
    <div>
        <Row justify={"space-around"}>
        <Col span={16}>
      <Table className={style.table} columns={columns} dataSource={data} />
      </Col>
      <Col span={6} className={style.sideCol}>
    
         <Search
      placeholder="Enter a promo code"
      allowClear
      enterButton="Apply"
      size="large"
      className={style.search}
    />
      </Col>
      </Row>
    </div>
  );
};

export default ShoppingBasket;
