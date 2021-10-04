import { Col, Input, Row, Space, Table } from "antd";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import React, { useEffect, useState } from "react";
import style from "./shoppingBasket.module.scss";

const ShoppingBasket = () => {
  const { Search } = Input;
  const [totalPrice, setTotalPrice] = useState(0);
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
      render: (index, record) => <span>$ {record.price} </span>,
    },
    {
      title: "action",
      dataIndex: "action",
      render: (text, record) => (
        <DeleteOutlined
          onClick={() => handleDelete(record.key)}
          className={style.DeleteIcon}
        />
      ),
    },
  ];

  const TableData = [
    {
      key: "1",
      name: "bag1",
      quantity: "5",
      price: 215,
    },
    {
      key: "2",
      name: "bag2",
      quantity: "5",
      price: 165,
    },
    {
      key: "3",
      name: "bag3",
      quantity: "5",
      price: 127,
    },
    {
      key: "4",
      name: "bag4",
      quantity: "5",
      price: 100,
    },
    {
      key: "5",
      name: "bag5",
      quantity: "5",
      price: 874,
    },
    {
      key: "6",
      name: "bag6",
      quantity: "5",
      price: 794,
    },
  ];

  useEffect(() => {
    generateTotal(TableData);
  });

  function handleDelete(value) {
    console.log(totalPrice);
    const allowDelete = confirm("Are you sure you want to delete this item?");
    if (allowDelete) {
      TableData.shift();
    }
  }

  function generateTotal(TableData) {
    setTotalPrice(
      TableData.map((node) => node?.price).reduce(function (a, b) {
        return b + a;
      }, 0)
    );
  }
  return (
    <div className={style.basket_Container}>
      <Row justify="space-around">
        <Col span={16}>
          <Table
            className={style.table}
            columns={columns}
            dataSource={TableData}
            pagination={false}
            scroll={true}
          />
        </Col>
        <Col span={6} className={style.total_prices}>
          <Search
            placeholder="Enter a promo code"
            allowClear
            enterButton="Apply"
            size="large"
            className={style.offer_code_input}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingBasket;
