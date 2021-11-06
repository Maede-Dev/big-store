import { Col, Divider, Input, Row, Space } from "antd";

import Link from "next/link";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import WithSizes from "react-sizes";
import style from "./Header.module.scss";

const { Search } = Input;
const Header = (props) => {
  const { isMobile } = props;
  return (
    <>
      {!isMobile ? (
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

          <Col span={6} className={style.header_cols}>
            <Link href="/">
              <img
                src="/Images/Logo.png"
                alt="header-logo"
                className={style.header_logo}
              />
            </Link>
          </Col>

          <Col span={6} className={style.header_cols}>
            <Space direction="vertical">
              <Search
                placeholder=" search"
                size="large"
                className={style.search_input}
              />
            </Space>
          </Col>

          <Col span={2} className={style.header_cols}>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col span={6} className={style.header_logo}>
            <Link href="/">
              <img
                src="/Images/Logo.png"
                alt="header-logo"
                className={style.header_logo}
              />
            </Link>
          </Col>
          <Col span={24}>
            <Divider />
          </Col>
        </Row>
      )}
    </>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000,
});
export default WithSizes(mapSizesToProps)(Header);

// export default Header;
