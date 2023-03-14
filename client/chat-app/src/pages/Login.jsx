import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/ApiRoute";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 1500,
    pauseOnHover: true,
    draggable: true,
    theme: "red",
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/chat");
    }
  }, []);

  const validationForm = () => {
    const { username, password } = user;
    if (username.length == 0 && password.length == 0) {
      toast.error("Please Enter username or password", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationForm()) {
      const { username, password } = user;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      if (!data.status) {
        return toast.error(data.msg, toastOptions);
      }

      localStorage.setItem("token", JSON.stringify(data.user));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="login-main">
        <div className="login-page">
          <form
            className="auth-login"
            action=""
            onSubmit={(event) => handleSubmit(event)}
          >
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
            <button className="login-btn" type="submit">
              Log In
            </button>
            <span>
              Don't have an account ?{" "}
              <Link to="/register">Create account.</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
