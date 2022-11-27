import { Col, Row } from "antd";
import React from "react";
import s from "./style.module.scss";

const HomeTop = () => {
  return (
    <Row className={s.home_top} justify="center">
      <Col xs={22} lg={11} className={s.glass_box}>
        <div className={s.glass}>
          <h1 className={s.top_h}>Welcome to HoneyShop website</h1>
          <div className={s.top_models_number}>more than 2500 models</div>
          <div className={s.top_text}>
            you can browse in Handbag and pick your favorite bag
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default HomeTop;
