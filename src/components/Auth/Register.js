import "./Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isEmptyEmail = (email) => {
    return String(email).length === 0;
  };

  const isEmptyPassword = (password) => {
    return String(password).length === 0;
  };

  const handleSubmit = async () => {
    //validate
    if (isEmptyEmail(email)) {
      toast.warn("Email is required");
      return;
    }
    if (isEmptyPassword(password)) {
      toast.warn("Password is required");
      return;
    }
    let checkEmail = validateEmail(email);
    if (!checkEmail) {
      toast.warn("Email is invalid");
      return;
    }
    //call api
    let response = await postRegister(
      email.trim(),
      username.trim(),
      password.trim()
    );
    if (response && response.EC === 0) {
      toast.success("Register success");
      //redirect
      navigate("/login");
    }

    if (response && response.EC !== 0) {
      toast.error(response.EM);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="header d-flex justify-content-end align-items-center px-5">
        <span>Already have an account?</span>
        <button
          className="btn btn-outline-dark mx-3 py-1"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </div>
      <div className="title col-4 mx-auto">Quizz App</div>
      <div className="welcome col-4 mx-auto">Hello, who's this</div>
      <div className="content-form col-4 mx-auto d-flex flex-column gap-3">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email*</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleSubmit()}>
            Sign up
          </button>
        </div>
        <div className="back-to-home" onClick={() => navigate("/")}>
          <span className="text-decoration-underline">
            {"<< "}Go to home page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
