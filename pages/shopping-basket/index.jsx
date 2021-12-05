import { Col, Image, Input, message, Row, Space, Table } from "antd";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import style from "./shoppingBasket.module.scss";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { removeBasketItems } from "../../redux/actions";

const ShoppingBasket = () => {
  const basketItems = useSelector((state) => state.basketItems);
  const isAuthenticated = useSelector((state) => state.authReducer);
  const dispatch = useDispatch()
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
      title: "Price",
      dataIndex: "price",
      render: (index, record) => <span>$ {record.price} </span>,
    },
    {
      title: "action",
      dataIndex: "action",
      render: (text, record) => (
        <DeleteOutlined
          onClick={() => handleDelete(record.id)}
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

  function handleDelete(id) {
    console.log(totalPrice);
    const allowDelete = confirm("Are you sure you want to delete this item?");
    if (allowDelete) {
      dispatch(removeBasketItems(id));
    } else {
      return;
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
        <Col span={19}>
          <Table
            className={style.table}
            columns={columns}
            dataSource={basketItems}
            pagination={false}
            scroll={true}
          />
        </Col>
        <Col span={6} className={style.total}>
          <Space size="large">
            <span>Total Price :</span>
            <span>{totalPrice} $</span>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ShoppingBasket;
