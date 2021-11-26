import { Button, Input, Space, Spin, Tabs } from "antd";
import {
  ExclamationOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogIn } from "../../redux/actions";
import React, { useState } from "react";
import style from "./login.module.scss";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

//to do  => use ant desing form for login then set for onFinish field the below function

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   await axios
  //     .post("http://localhost:1337/auth/local", {
  //       identifier: "admin",
  //       password: "bigstore1234",
  //     })
  //     .then((res) => dispatch(setLogIn(res.data)))
  //     .catch((res) => console.log(res));
  //   setLoading(fasle);
  // };

  return (
    <div className={style.login_Container}>
      <Spin spinning={loading}>
        <Tabs defaultActiveKey="1" onChange={callback}>
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
        </Tabs>
      </Spin>
    </div>
  );
};

export default Login;
