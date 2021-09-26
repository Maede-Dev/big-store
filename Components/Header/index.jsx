import { Col, Input, Row, Space } from "antd";

import Link from "next/link";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import style from "./Header.module.scss";

const { Search } = Input;
const Header = () => {
  return (
    <Row
      justify="space-between"
      align="middle"
      className={style.header_container}
    >
      {/* style in antd  */}
      <Col span={2} className={style.header_cols}>
        <Link href="/shopping-basket">
          <ShoppingCartOutlined className={style.shopping_icon} />
        </Link>
      </Col>

      <Col span={2} className={style.header_cols}>
        <Link href="/">
          <span>HOME</span>
        </Link>
      </Col>

      <Col span={2} className={style.header_cols}>
        <Link href="/aboutus">
          <span>ABOUT US</span>
        </Link>
      </Col>

      <Col span={2} className={style.header_cols}>
        <Link href="/product-list">
          <span>PRODUCT LIST</span>
        </Link>
      </Col>

      <Col span={2} className={style.header_cols}>
        <Link href="/sale">
          <span>SALE</span>
        </Link>
      </Col>

      <Col span={6} className={style.header_logo}>
        <Link href="/">
          <img src="/Images/Logo.png" alt="header-logo" className={style.header_logo}/>
        </Link>
      </Col>

      <Col span={8} className="search">
        <Space direction="vertical">
          <Search
            placeholder=" search"
            size="large"
            className={style.search_input}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
