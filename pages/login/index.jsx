import { Button, Form, Input, Spin, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";
import React, { useState } from "react";

import axios from "axios";
import { setLogIn } from "../../redux/actions";
import style from "./login.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    setLoading(true);
    await axios
      .post("http://localhost:1337/auth/local", {
        identifier: values?.userName,
        password: values?.password,
      })
      .then((res) => {
        dispatch(setLogIn(res.data));
        router.push("/");
      })
      .catch(() => message.error("userName or password is incorrect"));
    setLoading(false);
  };

  return (
    <div className={style.login_Container}>
      <Spin spinning={loading}>
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="userName"
            label="Username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              className={style.login_input}
              size="middle"
              placeholder="Email / Username"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              style={{ borderColor: "#a4a4a4" }}
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item>
            <Button className={style.login_btn} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default Login;
