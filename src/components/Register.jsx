import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import logo1 from "../images/logo1.png";
import logo from "../images/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle register form submission
const handleRegister = async (e) => {
  e.preventDefault();
  const { name, email, phone, password, confirmPassword } = formData;

  if (!name || !email || !phone || !password || !confirmPassword) {
    alert("Please fill all fields!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registration successful!");
    navigate("/login");
  } catch (error) {
    alert(error.message);
  }
};


  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Register Box */}
      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="Lifera logo" className="logo" />
          <img src={logo1} alt="Lifera logo" className="logo1" />
          <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>
              <b>Login here</b>
            </span>
          </p>
        </div>
        <div className="form-section">
          <h1 id="top">Create Your Lifera Account</h1>

          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className="login">
              Register
            </button>
          </form>

          {/* <p className="login-text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login here</span>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
