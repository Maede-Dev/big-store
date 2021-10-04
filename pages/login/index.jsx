import { Button, Input, Space, Tabs } from "antd";
import {
  ExclamationOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";

import React from "react";
import style from "./login.module.scss";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Login = () => {
  return (
    <div className={style.login_Container}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane  tab="Sign In" key="1">
          <h3 className={style.login_title}>
            Enter email or mobile phone number or Username
          </h3>
          <Input
            className={style.login_input}
            size="middle"
            placeholder="Email / Phone number / Username"
            prefix={<UserOutlined />}
          />
          <br />
          <br />
          <h3 className={style.login_title}>Password</h3>
          <Space direction="vertical">
            <Input.Password
              style={{ borderColor: "#a4a4a4" }}
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
          <br />
          <br />
          <Button type="danger" className={style.login_btn}>
            Continue
          </Button>
        </TabPane>
        <TabPane  tab="Create new Account" key="2">
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
            <ExclamationOutlined style={{color:"#d30606"}} />
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
      </Tabs>
    </div>
  );
};

export default Login;
