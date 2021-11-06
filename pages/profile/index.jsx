import {
  CalendarOutlined,
  GoogleOutlined,
  PhoneOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { Col, DatePicker, Input, Radio, Row, Space, Tabs } from "antd";

import React from "react";
import style from "./profile.module.scss";

function onChange(date, dateString) {
  console.log(date, dateString);
}
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
          Content of Tab 1
        </TabPane>
        <TabPane tab="Edite Profile" key="2">
          <Row>
            <Col span={6} className={style.name_profile}>
              <h4>
                <UserOutlined /> Name
              </h4>
              <Input size="large" defaultValue="Maede" />
            </Col>
            <Col span={6} className={style.lastname_profile}>
              <h4>
                <UserOutlined /> Last Name
              </h4>
              <Input size="large" defaultValue="Karimi" />
            </Col>
          </Row>
          
          <Col span={6} className={style.input_profile}>
            <h4>
              <WomanOutlined />
              Gender
            </h4>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Man</Radio>
              <Radio value={2}>Woman</Radio>
            </Radio.Group>
          </Col>
          
          <Col span={6}  className={style.input_profile}>
            <h4>
              <GoogleOutlined /> Email Adress
            </h4>
            <Input size="large" defaultValue="maedekarimi69110@gmail.com" />
          </Col>
          
          <Col span={6} className={style.input_profile}>
            <h4>
              <PhoneOutlined />
              Phone Number
            </h4>
            <Input size="large" defaultValue="09363928001" />
          </Col>
          
          <Col span={6} className={style.input_profile}>
            <h4>
              <CalendarOutlined /> Birth Date
            </h4>
            <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space>
          </Col>
        </TabPane>
        <TabPane tab="Orders" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default index;
