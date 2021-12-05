import { Col, Image, Input, message, Row, Space, Table } from "antd";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import style from "./shoppingBasket.module.scss";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const ShoppingBasket = () => {
  const basketItems = useSelector((state) => state.basketItems);
  const isAuthenticated = useSelector((state) => state.authReducer);
  const router = useRouter();
  const [totalPrice, setTotalPrice] = useState(0);

  const columns = [
    {
      title: "",
      dataIndex: "images",
      render: (entity, record) => {
        console.log(record);
        // return <div>{record.id}</div>;
        return (
          <Image
            preview={false}
            alt="basket items"
            width={60}
            height={60}
            src={`http://localhost:1337${record?.images[0]?.url}`}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (index, record) => <h3>{record?.name}</h3>,
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

  useEffect(() => {
    if (isAuthenticated === null) {
      message.error("You are not log in");
      router.push("/login");
    }
    generateTotal(basketItems);
  });

  function handleDelete(value) {
    console.log(totalPrice);
    const allowDelete = confirm("Are you sure you want to delete this item?");
    if (allowDelete) {
      basketItems.shift();
    }
  }

  function generateTotal(basketItems) {
    setTotalPrice(
      basketItems
        .map((node) => node?.price)
        .reduce(function (a, b) {
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
            dataSource={basketItems}
            pagination={false}
            scroll={true}
          />
        </Col>
        {/* <Col span={6} className={style.total_prices}>
          <Search
            placeholder="Enter a promo code"
            allowClear
            enterButton="Apply"
            size="large"
            className={style.offer_code_input}
          />
        </Col> */}
      </Row>
    </div>
  );
};

export default ShoppingBasket;
