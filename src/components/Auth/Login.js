import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async () => {
    //validate
    let checkEmail = validateEmail(email);
    if (!checkEmail) {
      toast.warn("Email is invalid");
      return;
    }
    //call api
    let response = await postLogin(email.trim(), password.trim());
    if (response && response.EC === 0) {
      dispatch({ type: "FETCH_USER_LOGIN_SUCCESS", payload: response.DT });
      toast.success("Login success");
      //redirect
      navigate("/");
    }

    if (response && response.EC !== 0) {
      toast.error(response.EM);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="login-container">
      <div className="header d-flex justify-content-end align-items-center px-5">
        <span>Don't have an account yet?</span>
        <button
          className="btn btn-outline-dark mx-3 py-1"
          onClick={() => navigate("/register")}
        >
          Sign up
        </button>
      </div>
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
        <div className="back-to-home" onClick={() => navigate("/")}>
          <span className="text-decoration-underline">
            {"<< "}Go to home page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
