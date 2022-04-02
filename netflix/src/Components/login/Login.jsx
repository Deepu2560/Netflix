import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleFinish = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
            alt=""
            className="logo"
          />
        </div>
      </div>

      <div className="container">
        <form onSubmit={handleFinish}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or Phone Number"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Email or Phone Number"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className="loginButton"
            type="submit"
            name="Sign In "
            placeholder="Sign In"
          />

          <span>
            New to Netflix? <b>Sign Up Now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};
