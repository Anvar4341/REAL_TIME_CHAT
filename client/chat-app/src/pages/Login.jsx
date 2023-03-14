import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="login-main">
    <div className="login-page">
      <form className="auth-login" action="" onSubmit={(event) => handleSubmit(event)}>
        <div className="header">
          <h1>Login</h1>
        </div>
        <input
        className="login-input"
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
          min="3"
          />
        <input
        className="login-input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
          />
        <button className="login-btn" type="submit">Log In</button>
        <span>
          Don't have an account ? <Link to="/register">Create account.</Link>
        </span>
      </form>
    </div>
</div>
  );
}

export default Login;
