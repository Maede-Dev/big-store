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
import React, { useEffect, useRef, useState } from "react";

import moment from "moment";
import style from "./profile.module.scss";

const dateFormat = "YYYY/MM/DD";
const { TabPane } = Tabs;
const Profile = () => {
  // inintial value is the back-end data after signIn
  const initialValue = {
    firstName: "Maede",
    lastName: "karimi",
    phoneNumber: "09012589632",
    email: "",
    gender: "",
    birthDate: "",
  };
  const [formRef] = Form.useForm();
  const [profileInformation, setProfileInformation] = useState(initialValue);

  useEffect(() => {
    handleSetFields();
  }, [profileInformation]);

  const handleSetFields = () => {
    formRef.setFieldsValue({
      firstName: profileInformation.firstName,
      lastName: profileInformation.lastName,
      phoneNumber: profileInformation.phoneNumber,
      email: profileInformation.email,
      gender: profileInformation.gender,
      birthDate: "",
    });
  };

  const onFinish = (values) => {
    if (confirm("are you sure about changes ?")) {
      setProfileInformation(values);
    } else {
      handleSetFields();
    }
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
      <Tabs tabPosition={"left"} defaultActiveKey={1}>
        <TabPane tab="Profile" key="1">
          <Row>
            <Col span={6}>
              <h4 className={style.h4profile}>
                <UserOutlined /> Name and LastName:
              </h4>
              <span>
                {`${profileInformation.firstName || "not found"} ${
                  profileInformation.lastName || "not found"
                }`}
              </span>
            </Col>
            <Col span={6}>
              <h4 className={style.h4profile}>
                <WomanOutlined />
                Gender:
              </h4>
              <span>{profileInformation?.gender || "not found"}</span>
            </Col>
          </Row>
          <Col span={6}>
            <h4 className={style.h4profile}>
              <GoogleOutlined /> Email Adress:
            </h4>
            <span>{profileInformation.email || "not found"}</span>
          </Col>

          <Col span={6}>
            <h4 className={style.h4profile}>
              <PhoneOutlined />
              Phone Number:
            </h4>
            <span>{profileInformation.phoneNumber || "not found"}</span>
          </Col>

          <Col span={6}>
            <h4 className={style.h4profile}>
              <CalendarOutlined /> Birth Date:
            </h4>
            <span>{profileInformation.birthDate || "not forund"}</span>
          </Col>
        </TabPane>
        <TabPane tab="Edite Profile" key="2">
          <Form
            form={formRef}
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
