import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="login">
      <div className="login-child" />
      <img className="avl-night-min-1" alt="" src="/avl-nightmin-1@2x.png" />
      <div className="login-item" />
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="hello">Hello!</div>
      <div className="welcome-to-our">{`Welcome to our login page! We're happy to see you back. `}</div>
      <div className="rectangle-parent" onClick={onGroupContainerClick}>
        <div className="group-child" />
        <div className="login1">Login</div>
      </div>
      <div className="forget-password">Forget password?</div>
      <div className="remember-me">Remember me</div>
      <div className="terms-of-service-parent">
        <div className="terms-of-service">Terms of service</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="copyright-2023">©Copyright 2023</div>
      </div>
      <div className="login-inner">
        <div className="instance-child" />
      </div>
      <div className="where-food-and-container">
        <span className="where">Where</span>
        <span>{` `}</span>
        <span className="food-and-community">{`food and community `}</span>
        <span className="where">come together.</span>
      </div>
      <TextField
        className="component-1"
        sx={{ width: 334 }}
        color="primary"
        variant="filled"
        type="text"
        label="Email"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className="component-2">
        <img className="subtract-icon" alt="" src="/subtract.svg" />
        <div className="password">Password</div>
        <div className="component-2-child" />
      </div>
    </div>
  );
};

export default Login;
