import React from "react";
import "../styles/Donate.css"; // you had `/src/styles/Donate.css`, make sure path is correct
import { FaHeart } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si"; // Si = Simple Icons
import { Heart, Clock, Activity, Award } from "lucide-react";
import {
  Calendar,
  Scale,
  HeartPulse,
  ShieldCheck,
  Scissors,
  RefreshCcw,
} from "lucide-react"; // ✅ icons
import { UserPlus, MapPin, CalendarDays, Droplet } from "lucide-react"; // ✅ import icons

const Donate = () => {
  return (
    <main className="donate-page">
      <section className="donate-hero">
        <div className="inner">
          <div className="heart-shape"></div>
          <h1>Donate Blood, Save Lives</h1>
          <h3>
            Your one donation can save up to 3 lives. Join our mission today!
          </h3>
          <div className="button-group">
            <button
              className="btn1 register1"
              // onClick={registerDonor}
              backgroun
            >
              <div
                style={{
                  fontSize: "40px",
                  color: "white",
                  outline: "red",
                  stroke: "1rem",
                }}
              >
                <FaHeart />{" "}
              </div>{" "}
              Register as Donor
            </button>
            <button className="btn1 find1" onClick="findCenters()">
              <div style={{ fontSize: "40px", color: "white" }}>
                <SiGooglemaps />{" "}
              </div>{" "}
              Find Nearby Centers
            </button>
          </div>
        </div>
      </section>

      <section className="reason">
        <h2 className="reason-title">Why Donate Blood?</h2>

        <div className="block">
          <div className="one">
            <Heart className="icon" /> {/* ❤️ Added icon */}
            <h3>Save 3 Lives</h3>
            <p>One donation can save up to three lives.</p>
          </div>

          <div className="two">
            <Clock className="icon" /> {/* 🕒 Added icon */}
            <h3>Always Needed</h3>
            <p>Every 2 seconds, blood is needed somewhere.</p>
          </div>

          <div className="three">
            <Activity className="icon" /> {/* 💓 Added icon */}
            <h3>Health Benefits</h3>
            <p>Donating blood improves heart health and reduces stress.</p>
          </div>

          <div className="four">
            <Award className="icon" /> {/* 🏅 Added icon */}
            <h3>Be a Hero</h3>
            <p>You become someone’s hero by donating blood.</p>
          </div>
        </div>
      </section>

      <section className="eligibility">
        <h2 className="eligibility-title">Eligibility Criteria</h2>
        <h5 className="eligibility-subtitle">
          Check if you're eligible to donate blood and save lives
        </h5>

        <div className="eligibility-grid">
          <div className="eligibility-card">
            <Calendar className="icon" /> {/* 🗓️ Age */}
            <p>Age: 18–65 years</p>
          </div>

          <div className="eligibility-card">
            <Scale className="icon" /> {/* ⚖️ Weight */}
            <p>Weight: 50 kg or above</p>
          </div>

          <div className="eligibility-card">
            <HeartPulse className="icon" /> {/* ❤️ Health */}
            <p>Health: Feeling healthy and fit</p>
          </div>

          <div className="eligibility-card">
            <ShieldCheck className="icon" /> {/* 🛡️ Illness */}
            <p>Illness: No major illness in the past 6 months</p>
          </div>

          <div className="eligibility-card">
            <Scissors className="icon" /> {/* ✂️ Surgery */}
            <p>Surgery: No recent surgery or infection</p>
          </div>

          <div className="eligibility-card">
            <RefreshCcw className="icon" /> {/* 🔁 Frequency */}
            <p>Frequency: Can donate again after 3 months</p>
          </div>
        </div>
      </section>
      <section className="donation_process">
        <h2 className="donation-title">Donation Process</h2>
        <h5 className="donation-subtitle">
          5 simple steps to become a life-saver
        </h5>

        <div className="donation-cards">
          <div className="donation-card">
            <div className="icon-wrapper">
              <UserPlus className="icon" />
            </div>
            <h3>1</h3>
            <h4>Register as a Donor</h4>
            <p>Fill out a simple form with your details</p>
          </div>

          <div className="donation-card">
            <div className="icon-wrapper">
              <MapPin className="icon" />
            </div>
            <h3>2</h3>
            <h4>Find Nearby Blood Bank</h4>
            <p>Locate the nearest donation center</p>
          </div>

          <div className="donation-card">
            <div className="icon-wrapper">
              <CalendarDays className="icon" />
            </div>
            <h3>3</h3>
            <h4>Book an Appointment</h4>
            <p>Choose a convenient time slot</p>
          </div>

          <div className="donation-card">
            <div className="icon-wrapper">
              <Droplet className="icon" />
            </div>
            <h3>4</h3>
            <h4>Donate Safely</h4>
            <p>Quick and safe donation process</p>
          </div>

          <div className="donation-card">
            <div className="icon-wrapper">
              <Award className="icon" />
            </div>
            <h3>5</h3>
            <h4>Receive Certificate</h4>
            <p>Get recognized for saving lives</p>
          </div>
        </div>
      </section>
      <section className="blood-banks">
        <h2 className="section-title">Find Nearby Blood Banks</h2>
        <p className="section-subtitle">
          Locate the nearest blood donation center in your area
        </p>

        <div className="search-bar">
          <input type="text" placeholder="Enter your city or ZIP code" />
          <button className="location-btn">📍 Use My Location</button>
        </div>

        <div className="banks-grid">
          <div className="bank-card">
            <h3>City Medical Center</h3>
            <p>📍 123 Health Street, Downtown</p>
            <p>🕒 Mon–Sat: 9 AM – 6 PM</p>
            <p>📞 +91-98765-43210</p>
            <button className="book-btn">Book Slot</button>
          </div>

          <div className="bank-card">
            <h3>Community Blood Bank</h3>
            <p>📍 456 Care Avenue, Westside</p>
            <p>🕒 Mon–Sun: 8 AM – 8 PM</p>
            <p>📞 +91-98765-43211</p>
            <button className="book-btn">Book Slot</button>
          </div>

          <div className="bank-card">
            <h3>Central Hospital</h3>
            <p>📍 789 Medical Plaza, Eastside</p>
            <p>🕒 Mon–Fri: 10 AM – 5 PM</p>
            <p>📞 +91-98765-43212</p>
            <button className="book-btn">Book Slot</button>
          </div>
        </div>
      </section>

      <section className="register-section">
        <h2 className="register-title">Register to Donate</h2>
        <p className="register-subtitle">
          Fill in your details and we'll help you save lives
        </p>

        <form className="register-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>Age *</label>
              <input type="number" placeholder="Enter your age" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Gender</label>
              <select>
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Blood Group *</label>
              <select required>
                <option>Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City / Location</label>
              <input type="text" placeholder="Enter your city" />
            </div>
            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Registration
          </button>
        </form>
      </section>

      <div className="donation-container">
        {/* Safe Donation Section */}
        <section className="safe-donation">
          <h2>Safe, Simple & Secure Donation</h2>

          <div className="donation-cards">
            <div className="donation-card">
              <h3>Safe & Sterile</h3>
              <p>All equipment is single use only to ensure your safety.</p>
            </div>
            <div className="donation-card">
              <h3>Quick Process</h3>
              <p>The entire donation process takes less than 15 minutes.</p>
            </div>
            <div className="donation-card">
              <h3>Regular Donation</h3>
              <p>You can donate again after 3 months.</p>
            </div>
          </div>

          <div className="post-donation">
            <h4>Post-Donation Care</h4>
            <ul>
              <li>
                Stay hydrated – drink plenty of fluids for the next 24 hours.
              </li>
              <li>Rest well and avoid strenuous activities for a few hours.</li>
              <li>Eat a healthy meal and maintain an iron-rich diet.</li>
              <li>Keep the bandage on for at least 4–6 hours.</li>
            </ul>
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="impact">
          <h2>Our Impact</h2>
          <div className="impact-cards">
            <div className="impact-card">
              <h3>1,200+</h3>
              <p>Donors Registered</p>
            </div>
            <div className="impact-card">
              <h3>3,500+</h3>
              <p>Lives Saved</p>
            </div>
            <div className="impact-card">
              <h3>50+</h3>
              <p>Hospitals Connected</p>
            </div>
          </div>
        </section>

        {/* Donor Stories */}
        <section className="stories">
          <h2>Donor Stories</h2>
          <div className="story-cards">
            <div className="story-card">
              <p>
                “The donation drive was fulfilling — I felt proud to help save a
                life.”
              </p>
              <h4>Rajiv Kumar</h4>
              <span>Blood Donor</span>
            </div>
            <div className="story-card">
              <p>
                “The process is smooth and efficient. Highly recommend
                donating!”
              </p>
              <h4>Ananya Singh</h4>
              <span>NGO Volunteer</span>
            </div>
            <div className="story-card">
              <p>
                “It’s so easy to register and donate — everyone should do it!”
              </p>
              <h4>Priya Sharma</h4>
              <span>First Time Donor</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section className="contact">
          <div className="contact-box">
            <h2>Need Help or Want to Partner with Us?</h2>
            <p>We're here to assist you with any questions or partnerships.</p>
            <p className="contact-info">📞 +91-98765-43210</p>
            <p className="contact-info">📧 support@lifera.org</p>
            <div className="but">
              <button>Contact Us</button>
              <button>Back to Home</button>
            </div>
            <p className="footer-text">
              © 2025 Lifera. Donate Blood. Save Lives.
            </p>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default Donate;
