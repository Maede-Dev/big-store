import React, { useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { signUpValidations } from "./validations";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const exapmleObject = {
    firstItem: "this is first item",
    secondItem: "this is second item",
    kambiz: {
      yek: "1 ast",
      do: "2 ast",
      se: "3 ast",
      chahar: "4 ast",
    },
    mayiTala: "mayi tala, tala tala",
  };

  console.log("this is choosen object element", signUpValidations.required);

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
    <div className={style.signUpContainer}>
      <Form
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className={style.login_input}
            size="middle"
            placeholder="Jack"
          />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className={style.login_input}
            size="middle"
            placeholder="Middle"
          />
        </Form.Item>

        <Form.Item
          name="userName"
          label="Username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className={style.login_input}
            size="middle"
            placeholder="jack_middle"
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your Phone Number!" },
            { required: true, message: "Please input your Phone Number!" },
            { required: true, message: "Please input your Phone Number!" },
          ]}
        >
          <Input
            className={style.login_input}
            size="middle"
            placeholder="0936666666"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            className={style.login_input}
            size="middle"
            placeholder="jachMidd@gmail.com"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
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

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
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
    </div>
  );
};

export default SignUpForm;
