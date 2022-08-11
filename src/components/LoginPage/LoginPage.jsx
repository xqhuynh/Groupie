import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const history = useHistory();

  return (
    <div className="login-page-container">
      <LoginForm />

      {/* User taken to register page when they click 'Register' */}
      <center>
        <button
          type="button"
          className="register-btn"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
