import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/authStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somthing went worng");
    }
  };

  return (
    <Layout title={"Register - Stylebuilder"}>
      {/* <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="inputName"
              placeholder="Enter Name"
              required
            />
          </div>
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
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="inputPhone"
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="inputAddress"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="inputAnswer"
              placeholder="What is your favorite sports ?"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            RGISTER
          </button>
          <div className="mt-3">
            allready have an account? <Link to={"/login "}>Login</Link>
          </div>
        </form>
      </div> */}
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h4 className="heading">Register</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              id="inputName"
              placeholder="Enter Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              id="inputEmail"
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              id="inputPassword1"
              placeholder="Enter Password"
              required
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              id="inputPhone"
              placeholder="Enter Phone Number"
              required
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input"
              id="inputAddress"
              placeholder="Enter Address"
              required
            />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="input"
              id="inputAnswer"
              placeholder="What is your favorite sports ?"
              required
            />
            <span className="have-acc">Have an account</span>
            <span className="login-link">
              <Link to="/login">Login</Link>
            </span>
            <input
              className="register-button"
              type="submit"
              defaultValue="Register"
              placeholder="Register"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
