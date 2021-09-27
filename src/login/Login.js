import { useState } from "react";

import Button from "../UI/components/button/Button";
import Card from "../UI/components/card/Card";
import logo from '../assets/images/triggx-logo.png';
import Logo from "../UI/components/logo/Logo";
import LoginForm from "./components/login-form/LoginForm";
import PageTitle from "../UI/components/page-title/PageTitle";

import "./Login.scss";

const Login = () => {

  const [isLogin, setIsLogin] = useState(false);
  const getLoginData = newLoginData => {
    const loginData = {
      ...newLoginData
    };
    console.log(loginData);
    setIsLogin(true);
  }

  return (
    <>
      {
        !isLogin &&
        <>
          <PageTitle>Login</PageTitle>
          <Card>
            <Logo logoName={logo} title="Triggx" />
            <LoginForm onLogin={getLoginData} />
            <Button buttonId="forgotPassword" text="Forgot password" type="button" classes="btn--secondary" />
          </Card>
        </>
      }
      {
        isLogin &&
        <>
          <PageTitle>Welcome</PageTitle>
          <Card>
            <Logo logoName={logo} title="Triggx" />
            <h2 className="welcome-text">Welcome to Triggx</h2>
          </Card>
        </>
      }
    </>
  );
}

export default Login;