import { Button, Form, Input } from "antd";

import { Breadcrumb } from 'antd';
import React from "react";
import style from "./contactUs.module.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
};

const ContactUs = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className={style.ContactUs_Container}>
      <div className={style.ContactUs_title}>
        <h1 className={style.h1} >Contact Us</h1>
        <Breadcrumb >
    <Breadcrumb.Item className={style.breadcrumbs}>
      <a href="/">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Contact US</Breadcrumb.Item>
  </Breadcrumb>
      </div>
      <p className={style.text}>Please enter your details below or give us a call for any sales or order enquiries.</p>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={["user", "name"]} label="Name">
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ message: "Please input your phone number!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["user", "Message"]} label="Message">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button
            className={style.ContactUs_btn}
            type="primary"
            htmlType="submit"
          >
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactUs;
