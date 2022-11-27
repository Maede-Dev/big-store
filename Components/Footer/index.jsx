import { Button, Col, Image, Row } from "antd";
import {
  FileTextOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import Link from "next/link";
import React from "react";
import style from "./footer.module.scss";

const FooterCustom = () => {
  return (
    <>
      <Row
        className={style.footer_container}
        align="top"
        justify="space-between"
      >
        <Col xs={22} lg={7} className={style.page_name}>
          <span>H O N E Y - S H O P</span>
        </Col>
        <Col xs={22} lg={7} className={style.text_box}>
          <h2>Comented to customers</h2>
          <div className={style.text}>
            you can order your favorite bag safly , cause you could follow up
            your order any moment or return your commodity till 72 hour after
            delivery.
          </div>
        </Col>
        <Col xs={22} lg={7} className={style.links_box}>
          <h2>Navigate</h2>
          <Link href="/">
            <span className={style.links}>
              <HomeOutlined /> Home
            </span>
          </Link>
          <Link href="/product-list">
            <span className={style.links}>
              <UnorderedListOutlined /> Product list
            </span>
          </Link>
          <Link href="/shopping-basket">
            <span className={style.links}>
              <ShoppingCartOutlined /> basket
            </span>
          </Link>
          <Link href="/contactUs">
            <span className={style.links}>
              <FileTextOutlined /> Contact Us
            </span>
          </Link>
        </Col>
        <Col className={style.copy_right} span={24}>
          HoneyShop © 2021 - 2021 All rights reserved
        </Col>
      </Row>
    </>
  );
};

export default FooterCustom;
