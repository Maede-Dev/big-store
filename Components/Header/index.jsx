import { Col, Input, Row, Space } from "antd";

import Link from "next/link";
import React from "react";
import style from "./Header.module.scss";

const { Search } = Input;
const Header = () => {
  return (
    <Row justify="space-between" align="middle" className={style.header_container}>
      {/* style in antd */
      /* <Checkbox>check me! </Checkbox> */}
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

      <Col span={8} className={style.header_logo}>
        {/* <img src="/public/Images/Logo.png" alt="header-logo" /> */}
        logo-image
      </Col>

      <Col span={8} className="search">
        <Space direction="vertical">
          <Search placeholder=" search" className="search-box" />
        </Space>
      </Col>
    </Row>
  );
  
};


export default Header;
