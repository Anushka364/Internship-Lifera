// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "/src/components/Navbar";
// import Center from "/src/components/Center";
// import Register from "/src/components/Register";
// import Login from "/src/components/Login";

// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         {/* Navbar stays on top for all pages */}
//         <Navbar />

//         {/* Define all routes */}
//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<Center />} />

//           {/* Register/Login Page */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "/src/components/Navbar";
// import Center from "/src/components/Center";
// import Register from "/src/components/Register";
// import Login from "/src/components/Login";
// import "./App.css";
// import AboutUs from "./components/AboutUs";
// import ContactUs from "./components/ContactUs";
// import Community from "./components/Community";
// import FindBlood from "./components/findBlood";
// import Footer from "./components/footer";

//const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         {/* Navbar stays visible on all pages */}
//         <Navbar />

//         <Routes>
//           {/* Home Page */}
//           <Route path="/" element={<Center />} />

//           {/* Auth Pages */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Temporary placeholder routes (to remove future warnings) */}
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/events" element={<h2>Events Page Coming Soon</h2>} />
//           <Route path="/community" element={<Community />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/donate" element={<h2>Donate Page Coming Soon</h2>} />
//           <Route path="/find" element={<FindBlood />} />
//           <Route path="/more" element={<h2>More Page Coming Soon</h2>} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "/src/components/Navbar";
import Center from "/src/components/Center";
import Register from "/src/components/Register";
import Login from "/src/components/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Community from "./components/Community";
import FindBlood from "./components/findBlood";
import Footer from "./components/footer";
import Donate from "./components/Donate";
import Event from "./components/event";
import "./App.css";

// ✅ Separate component to use useLocation()
const AppContent = () => {
  const location = useLocation();

  // Footer hidden on login & register pages
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="app">
      {/* Navbar stays visible on all pages */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Center />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Other Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/find" element={<FindBlood />} />
        {/* <Route path="/more" element={<h2>More Page Coming Soon</h2>} /> */}
      </Routes>

      {/* ✅ Footer hidden on Login & Register */}
      {!hideFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
