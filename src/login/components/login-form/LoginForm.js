import { useState } from 'react';

import Button from "../../../UI/components/button/Button";
import "./LoginForm.scss";

const LoginForm = props => {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const loginData = {
      email: state.email,
      password: state.password
    }

    props.onLogin(loginData);
    setState({
      email: '',
      password: ''
    })
  }
  const isEnabled = state.email.length > 0 && state.password.length > 0;

  return (
    <form onSubmit={submitHandler}>
      <dl className="form-list">
        <dt>
          <label htmlFor="email">Email address</label>
        </dt>
        <dd>
          <input type="email" id="email" value={state.email}
            onChange={handleChange} />
        </dd>
        <dt>
          <label htmlFor="password">Password</label>
        </dt>
        <dd>
          <input type="password" id="password" value={state.password}
            onChange={handleChange} />
        </dd>
      </dl>
      <Button disabled={!isEnabled} buttonId="login" text="Login" type="submit" classes="btn--primary login-btn" />
    </form>
  );
}

export default LoginForm;