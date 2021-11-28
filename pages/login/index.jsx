import { Button, Form, Input, Space, Spin, Tabs, message } from "antd";
import {
  ExclamationOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import axios from "axios";
import { setLogIn } from "../../redux/actions";
import style from "./login.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values) => {
    console.log(values);
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
          name="basic"
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Sign In" key="1">
            <h3 className={style.login_title}>Enter userName or email </h3>
            <Input
              className={style.login_input}
              size="middle"
              placeholder="Email / Phone number / Username"
              prefix={<UserOutlined />}
            />
            <br />
            <br />
            <h3 className={style.login_title}>Password</h3>
            <Input.Password
              style={{ borderColor: "#a4a4a4" }}
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <br />
            <br />
            <Button type="danger" className={style.login_btn}>
              Continue
            </Button>
          </TabPane>
          <TabPane tab="Create new Account" key="2">
            <h3 className={style.login_title}>Your name</h3>
            <Input className={style.login_input} size="middle" />
            <br />
            <br />
            <h3 className={style.login_title}>Mobile number or email</h3>
            <Input className={style.login_input} size="middle" />
            <br />
            <br />
            <h3 className={style.login_title}>Username</h3>
            <Input className={style.login_input} size="middle" />
            <br />
            <br />
            <h3 className={style.login_title}>Password</h3>
            <Input
              className={style.login_input}
              size="middle"
              placeholder="At least 6 characters"
            />
            <br />
            <span>
              <ExclamationOutlined style={{ color: "#d30606" }} />
              Passwords must be at least 6 characters.
            </span>
            <br />
            <br />
            <h3 className={style.login_title}>Re-enter password</h3>
            <Input className={style.login_input} size="middle" />
            <br />
            <br />
            <Button type="danger" className={style.login_btn}>
              Continue
            </Button>
          </TabPane>
        </Tabs> */}
      </Spin>
    </div>
  );
};

export default Login;
