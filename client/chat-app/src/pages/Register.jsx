import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/ApiRoute";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/chat");
    }
  }, []);
  
  const toastOptions = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "red",
  };

  const validationForm = () => {
    const { email, username, password } = user;
    if (email.length === 0 || username.length === 0 || password.length === 0) {
      toast.error(
        "Please Enter email or password or username",
        toastOptions
      );
      return false
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validationForm()){
      const { email, username, password } = user;
      const {data} = await axios.post(registerRoute, {
        username,
        email,
        password
      })
      if (!data.status){
        return toast.error(data.msg, toastOptions)
      }
      
      localStorage.setItem("token", JSON.stringify(data.user));
      navigate("/chat");
      console.log(data);
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
              <h1>Register</h1>
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
              type="email"
              placeholder="Email"
              name="email"
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
              Register
            </button>
            <span>
              You have an account ? <Link to="/login">Login.</Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
