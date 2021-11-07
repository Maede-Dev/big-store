import {
  CalendarOutlined,
  GoogleOutlined,
  PhoneOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Col, DatePicker, Input, Radio, Row, Space, Tabs } from "antd";

import React from "react";
import moment from 'moment';
import style from "./profile.module.scss";

const dateFormat = 'YYYY/MM/DD';
const { TabPane } = Tabs;
const index = () => {
  const [value, setValue] = React.useState(2);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className={style.profile_Container}>
      <Tabs tabPosition={"left"}>
        <TabPane tab="Profile" key="1">
        <Row>
            <Col span={6}>
              <h4 className={style.h4profile}>
                <UserOutlined /> Name and LastName:
              </h4>
              <span>Maede Karimi</span>
            </Col>
            <Col span={6} >
              <h4 className={style.h4profile}>
              <WomanOutlined />
              Gender:
              </h4>
              <span>Female</span>
            </Col>
          </Row>
          <Col span={6}  >
            <h4 className={style.h4profile}>
              <GoogleOutlined /> Email Adress:
            </h4>
            <span>maedekarimi69110@gmail.com</span>
          </Col>
          
          <Col span={6} >
            <h4 className={style.h4profile}>
              <PhoneOutlined />
              Phone Number:
            </h4>
            <span>03963928001</span>
          </Col>
          
          <Col span={6} >
            <h4 className={style.h4profile}>
              <CalendarOutlined /> Birth Date:
            </h4>
            <span>1998/07/04</span>
          </Col>
        </TabPane>
        <TabPane tab="Edite Profile" key="2">
          <Row>
            <Col span={6} className={style.name_editedprofile}>
              <h4 className={style.h4editedprofile}>
                <UserOutlined /> Name
              </h4>
              <Input size="large" defaultValue="Maede" />
            </Col>
            <Col span={6} className={style.lastname_editedprofile}>
              <h4 className={style.h4editedprofile}>
                <UserOutlined /> Last Name
              </h4>
              <Input size="large" defaultValue="Karimi" />
            </Col>
          </Row>
          
          <Col span={6}>
            <h4 className={style.h4editedprofile}>
              <WomanOutlined />
              Gender
            </h4>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Male</Radio>
              <Radio value={2}>Female</Radio>
            </Radio.Group>
          </Col>
          
          <Col span={6}>
            <h4 className={style.h4editedprofile}>
              <GoogleOutlined /> Email Adress
            </h4>
            <Input size="large" defaultValue="maedekarimi69110@gmail.com" />
          </Col>
          
          <Col span={6} >
            <h4 className={style.h4editedprofile}>
              <PhoneOutlined />
              Phone Number
            </h4>
            <Input size="large" defaultValue="09363928001" />
          </Col>
          
          <Col span={6}>
            <h4 className={style.h4editedprofile}>
              <CalendarOutlined /> Birth Date
            </h4>
            <Space direction="vertical">
              <DatePicker defaultValue={moment('1998/07/04', dateFormat)} format={dateFormat} />
            </Space>
          </Col>
        </TabPane>
        <TabPane tab="Orders" key="3">
          <h1>          Oooooooops !
          No Orders</h1>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default index;
