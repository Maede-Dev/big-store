import { Col, Row } from "antd";

import Link from "next/link";
import React from "react";
import style from "./Page404.module.scss";

const Page404 = () => {
  return (
    <Row
      justify="center"
      align="middle"
      className={style.page404_container}
    >
      <Link href="/">
      <img src="/Images/404Error.jpg" alt="404Error" className={style.Img404} />
      </Link>
    </Row>
  );
};

export default Page404;
