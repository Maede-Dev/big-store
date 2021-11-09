import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Space,
  Tabs,
} from "antd";
import {
  CalendarOutlined,
  GoogleOutlined,
  PhoneOutlined,
  UserOutlined,
  WomanOutlined,
} from "@ant-design/icons";

import React from "react";
import moment from "moment";
import style from "./profile.module.scss";

const dateFormat = "YYYY/MM/DD";
const { TabPane } = Tabs;
const Profile = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
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
            <Col span={6}>
              <h4 className={style.h4profile}>
                <WomanOutlined />
                Gender:
              </h4>
              <span>Female</span>
            </Col>
          </Row>
          <Col span={6}>
            <h4 className={style.h4profile}>
              <GoogleOutlined /> Email Adress:
            </h4>
            <span>maedekarimi69110@gmail.com</span>
          </Col>

          <Col span={6}>
            <h4 className={style.h4profile}>
              <PhoneOutlined />
              Phone Number:
            </h4>
            <span>03963928001</span>
          </Col>

          <Col span={6}>
            <h4 className={style.h4profile}>
              <CalendarOutlined /> Birth Date:
            </h4>
            <span>1998/07/04</span>
          </Col>
        </TabPane>
        <TabPane tab="Edite Profile" key="2">
          <Form
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Row>
              <Col span={6} className={style.name_editedprofile}>
                <h4 className={style.h4editedprofile}>
                  <UserOutlined /> Name
                </h4>
                <Form.Item
                  name="firstName"
                  rules={[
                    { required: true, message: "first name must be complete" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={6} className={style.lastname_editedprofile}>
                <h4 className={style.h4editedprofile}>
                  <UserOutlined /> Last Name
                </h4>
                <Form.Item
                  name="lastName"
                  rules={[
                    { required: true, message: "last name must be complete" },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              </Col>
            </Row>
            <Col span={6}>
              <h4 className={style.h4editedprofile}>
                <WomanOutlined />
                Gender
              </h4>
              <Form.Item
                name="gender"
                rules={[{ required: true, message: "gender must be complete" }]}
              >
                <Radio.Group>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>

            <Col span={6}>
              <h4 className={style.h4editedprofile}>
                <GoogleOutlined /> Email Adress
              </h4>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                  },
                  {
                    required: true,
                    message: "email must be exist!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <h4 className={style.h4editedprofile}>
                <PhoneOutlined />
                Phone Number
              </h4>
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: false },
                  { min: 11, message: "Phone number must be 11 number" },
                ]}
              >
                <Input size="large" />
              </Form.Item>
            </Col>

            <Col span={6}>
              <h4 className={style.h4editedprofile}>
                <CalendarOutlined /> Birth Date
              </h4>
              <Form.Item name="birthDate">
                <DatePicker format={dateFormat} />
              </Form.Item>
            </Col>

            <Row justify="end">
              <Button type="primary" htmlType="submit" size="large">
                Submit !
              </Button>
            </Row>
          </Form>
        </TabPane>
        <TabPane tab="Orders" key="3">
          <h1> Oooooooops ! No Orders</h1>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
