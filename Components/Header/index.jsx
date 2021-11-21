import { Col, Divider, Input, Row, Space, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  UnorderedListOutlined,
  UserOutlined,
  FileTextOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import WithSizes from "react-sizes";
import style from "./style.module.scss";

const Header = (props) => {
  const { isMobile } = props;
  return (
    <>
      <Row className={style.header} justify="space-around" align="middle">
        <Col span={5}>
          <Link href="/">
            <Image
              className={style.header_logo}
              alt="header logo"
              src="/Images/Logo.png"
              width={190}
              height={50}
            />
          </Link>
        </Col>
        <Col span={10} className={style.header_menu}>
          <Link href="/">
            <div className={style.header_menu}>
              <HomeOutlined className={style.header_icon} />
              <span className={style.header_text}>Home</span>
            </div>
          </Link>

          <Link href="/product-list">
            <div className={style.header_menu}>
              <UnorderedListOutlined className={style.header_icon} />
              <span className={style.header_text}>Product list</span>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className={style.header_menu}>
              <FileTextOutlined className={style.header_icon} />
              <span className={style.header_text}>About Us</span>
            </div>
          </Link>
          <Link href="/shopping-basket">
            <div className={style.header_menu}>
              <ShoppingCartOutlined className={style.header_basket} />
              {/* <span className={style.header_text}>About Us</span> */}
            </div>
          </Link>
        </Col>

        <Col span={6} className={style.user_dropdown}>
          <Link href="/login">
            <div>
              <UserOutlined className={style.header_icon} />
              <span className={style.header_text}>Log in / sign in</span>
            </div>
          </Link>
        </Col>
      </Row>

      {/* mobile headers */}

      <div className={style.header_mobile}>
        <Row align="middle" justify="space-between" className={style.header_top_mobile}>
          <Link href="/">
            <img
              src="/Images/Logo.png"
              alt="header-logo"
              className={style.header_logo}
            />
          </Link>
          <Link href="/shopping-basket">
            <div className={style.bottom_menu}>
              <ShoppingCartOutlined className={style.mobile_basket} />
            </div>
          </Link>
        </Row>

        <Row
          className={style.bottom_header}
          justify="space-around"
          align="middle"
        >
          <Link href="/">
            <div className={style.bottom_menu}>
              <HomeOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Home</span>
            </div>
          </Link>
          <Link href="/product-list">
            <div className={style.bottom_menu}>
              <UnorderedListOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Product list</span>
            </div>
          </Link>
          <Link href="/aboutUs">
            <div className={style.bottom_menu}>
              <FileTextOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>About Us</span>
            </div>
          </Link>
          <Link href="/login">
            <div className={style.bottom_menu}>
              <UserOutlined className={style.bottom_icon} />
              <span className={style.bottom_text}>Log in / sign in</span>
            </div>
          </Link>
        </Row>
      </div>
    </>
  );
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
  isTablet: width < 1000,
});
export default WithSizes(mapSizesToProps)(Header);

// export default Header;
