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
      <Col span={3} className={style.header__cols}>
        <Link href="/">
          <span>HOME</span>
        </Link>
      </Col>

      <Col span={3} className={style.header__cols}>
        <Link href="/aboutUs">
          <span>ABOUT US</span>
        </Link>
      </Col>

      <Col span={3} className={style.header__cols}>
        <Link href="/productList">
          <span>PRODUCT LIST</span>
        </Link>
      </Col>

      <Col span={3} className={style.header__cols}>
        <Link href="/sale">
          <span>SALE</span>
        </Link>
      </Col>

      <Col span={4} className="header-logo">
        {/* <img src="/public/Images/Logo.png" alt="header-logo" /> */}
        logo-image
      </Col>

      <Col span={4} className="search">
        <Space direction="vertical">
          <Search placeholder=" search" className="search-box" />
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
