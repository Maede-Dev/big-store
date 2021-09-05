import { Col, Menu, Row } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const Header = () => {

    return (
        <Menu
      mode="horizontal"
      className="header-container"
    >
      <Row justify="space-between" align="middle">
        <Col span={8} className="header-cols">
          <Menu.Item key="home" className="header-items">
            <Link to="/">
              <span className="mr-1">خانه</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="productList" className="header-items">
            <Link to="/productList">
              <span className="mr-1">لیست محصولات</span>
            </Link>
          </Menu.Item>
        </Col>
        <Col span={10} className="header-cols">

          <Menu.Item key="aboutUs" className="header-items">
           
            <Link to="/aboutUs">درباره ما</Link>
          </Menu.Item>
        </Col>
      </Row>
    </Menu>
    )
}

export default Header
