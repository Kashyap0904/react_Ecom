import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../../styles/authStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went worng");
    }
  };

  return (
    <div>
      <Layout title={"Login - Stylebuilder"}>
        {/* <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">LOGIN FORM</h4>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="inputEmail"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="inputPassword1"
                placeholder="Enter Password"
                required
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                FORGOT PASSWORD
              </button>
            </div>

            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
            <div className="mt-3">Don't have account?</div>
            <div className="mt-3">
              <Link to={"/register"}>Create New Account</Link>
            </div>
          </form>
        </div> */}
        <div className="container">
          <form onSubmit={handleSubmit} className="form">
            <h4 className="heading">Sign In</h4>
            <div className="mb-3">
              <input
                required=""
                className="input"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <input
                required
                className="input"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                placeholder="Password"
              />
              <span className="forgot-password">
                <Link to="/forgot-password">Forgot Password ?</Link>
              </span>
              <span className="create-new">
                <Link to="/register">Create New Account</Link>
              </span>
              <input
                className="login-button"
                type="submit"
                defaultValue="Sign In"
              />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
