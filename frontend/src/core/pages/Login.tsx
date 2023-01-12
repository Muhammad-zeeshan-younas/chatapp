import React from "react";
import "./login.scss";
type Props = {};

const Login = ({}: Props) => {
  return (
    <div className="login_card">
      <div className="login_card__heading">Sign In</div>
      <form className="form">
        <div className="form_field">
          <input
            className="form_field__input"
            type="text"
            id="username"
            placeholder="   "
          />
          <label className="form_field__label">username</label>
        </div>
        <div className="form_field">
          <input
            className="form_field__input"
            type="password"
            id="password"
            placeholder=" "
          />
          <label className="form_field__label" htmlFor="password">
            password
          </label>
        </div>
        <button className="form_button" type="submit">
          Sign in
        </button>
        <button className="form_button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
