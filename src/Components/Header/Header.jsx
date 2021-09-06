import { Col, Input, Row, Space } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const { Search } = Input;
const Header = () => {
  return (
    <Row justify="space-between" align="middle">
      
      <Col span={3} className="header-cols">
      <Link to="/">
        <span>HOME</span>
        </Link>
      </Col>
     
      <Col span={3} className="header-cols">
      <Link to="/aboutUs">
        <span>ABOUT US</span>
        </Link>
      </Col>
      
      <Col span={3} className="header-cols">
      <Link to="/productList">
        <span>PRODUCT LIST</span>
        </Link>
      </Col>
      
      <Col span={3} className="header-cols">
      <Link to="/sale">
        <span>SALE</span>
        </Link>
      </Col>
      
      <Col span={4} className="header-logo">
          <img src="/public/Images/Logo.png" alt="header-logo" />
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
