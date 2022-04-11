import LoginForm from "../../sections/loginForm";
import SignUpForm from "../../sections/signUpForm";
import { Tabs } from "antd";
import style from "./style.module.scss";

const { TabPane } = Tabs;
const LoginView = () => {
  return (
    <div className={style.loginView}>
      <Tabs tabPosition="top" defaultActiveKey={1}>
        <TabPane tab="Login" key="1">
          <LoginForm />
        </TabPane>
        <TabPane tab="SignUp" key="2">
          <SignUpForm />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginView;
