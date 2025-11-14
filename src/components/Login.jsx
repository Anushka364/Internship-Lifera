import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"; // Reuse same styling
import logo1 from "../images/logo1.png";
import logo from "../images/logo.png";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    try{
      //firebase login
      console.log("Login Data:", credentials);
    alert("Login successful!");
    // navigate("/dashboard"); // Uncomment later after backend setup
    }catch (error){
      alert(error.message);
    }

    //console.log("Login Data:", credentials);
    //alert("Login successful!");
    // navigate("/dashboard"); // Uncomment later after backend setup
  };

  return (
    <div className="login-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Box */}
      <div className="login-box">
        <div className="logo-section">
          <img src={logo} alt="Lifera logo" className="logo" />
          <img src={logo1} alt="Lifera logo" className="logo1" />
        </div>

        <div className="form-section">
          <h1 id="top">Login to Your Lifera Account</h1>

          <form onSubmit={handleLogin} className="register-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit" className="login">
              Login
            </button>
          </form>

          <p className="login-text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>
              <b>Register here</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
