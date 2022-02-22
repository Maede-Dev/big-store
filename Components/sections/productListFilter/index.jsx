import { Button, Form, Input, Spin, message } from "antd";
import React, { useRef, useState } from "react";
import style from "./style.module.scss";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const ProductListFilter = ({ setFilters , setVisible }) => {
  const [formRef] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setFilters(values);
    setLoading(false);
    setVisible(false);
  };
  return (
    <div className={style.filterContainer}>
      <Spin spinning={loading}>
        <Form
          {...layout}
          form={formRef}
          name="nest-messages"
          onFinish={onFinish}
        >
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>

          <Button className={style.filterBtn} htmlType="submit">
            Apply Filers
          </Button>
        </Form>
      </Spin>
    </div>
  );
};

export default ProductListFilter;
