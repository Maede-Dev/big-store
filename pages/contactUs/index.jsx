<<<<<<< HEAD
import { Button, Col, Form, Input, Row } from "antd";
=======
import { Button, Form, Input, message, Spin } from "antd";
>>>>>>> 405f724274415d6df2757ac0084f360795f3d677

import { Breadcrumb } from "antd";
import React, { useRef, useState } from "react";
import style from "./contactUs.module.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const ContactUs = () => {
  const [formRef] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    formRef.resetFields();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    message.success(
      `Dear ${
        values.name || "..."
      } thank you for your message, our supporter will answer your soon`
    );
  };

  return (
    <div className={style.ContactUs_Container}>
<<<<<<< HEAD
      <Row className="contactUs"> 
      <Col span={24}>
      <div className={style.ContactUs_title}>
        <h1 className={style.h1} >Contact Us</h1>
        <Breadcrumb >
    <Breadcrumb.Item className={style.breadcrumbs}>
      <a href="/">Home</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Contact US</Breadcrumb.Item>
  </Breadcrumb>
      </div>
      </Col>
      </Row>
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
=======
      <Spin spinning={loading}>
        <h3 className={style.text}>
          Please enter your details below or give us a call for any sales or
          order enquiries.
        </h3>
        <Form
          {...layout}
          form={formRef}
          name="nest-messages"
          onFinish={onFinish}
>>>>>>> 405f724274415d6df2757ac0084f360795f3d677
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
                required: true,
                message: "you must enter your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["user", "Message"]}
            label="Message"
            rules={[{ required: true, message: "Write your message!" }]}
          >
            <Input.TextArea maxLength={200} />
          </Form.Item>

          <Button
            className={style.ContactUs_btn}
            type="primary"
            htmlType="submit"
          >
            Send
          </Button>
        </Form>
      </Spin>
    </div>
  );
};

export default ContactUs;
