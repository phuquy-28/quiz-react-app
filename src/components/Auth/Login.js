import "./Login.scss";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    alert(email + " " + password);
  };
  return (
    <div className="login-container">
      <div className="header">Don't have an account yet?</div>
      <div className="title col-4 mx-auto">Quizz App</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto d-flex flex-column gap-3">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <span className="forgot-password">Forget password</span>
        <div>
          <button className="btn-submit" onClick={() => handleSubmit()}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
