import React, { useState } from "react";
import "../styles/Community.css";

const Community = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinClick = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <section className="community-page">
      {/* Hero Section */}
      <div className="community-hero">
        <h1>Building a Healthier, Kinder World</h1>
        <p>
          Together, we’re creating a network of donors, volunteers, and
          changemakers who believe that every drop counts.
        </p>
      </div>

      {/* Mission Section */}
      <div className="community-mission">
        <h2>Our Mission</h2>
        <p>
          Lifera’s community stands for compassion and connection. We bring
          people together to promote awareness, encourage donation drives, and
          make life-saving contributions through collective effort.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="community-highlights">
        <div className="highlight-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Blood Drive"
          />
          <h3>Blood Donation Drives</h3>
          <p>
            Organizing campus and city-wide donation drives to support hospitals
            and those in need.
          </p>
        </div>

        <div className="highlight-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
            alt="Volunteers"
          />
          <h3>Volunteer Programs</h3>
          <p>
            Empowering individuals to join hands in awareness, organization, and
            emergency help.
          </p>
        </div>

        <div className="highlight-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
            alt="Health Awareness"
          />
          <h3>Health Awareness</h3>
          <p>
            Spreading knowledge about health, hygiene, and the importance of
            timely donations.
          </p>
        </div>
      </div>

      {/* Join Section */}
      <div className="join-section">
        <h2>Join the Movement</h2>
        <p>
          Be a part of something meaningful. Volunteer, donate, or simply spread
          the word — every action saves lives.
        </p>
        <button onClick={handleJoinClick}>Join Us</button>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <h3>Join Lifera Community</h3>
            <p>Fill your details to become a part of our mission</p>
            <form className="popup-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="City / Institution" required />
              <textarea
                placeholder="Why do you want to join?"
                rows="3"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div className="community-testimonials">
        <h2>Community Voices</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              “Being part of Lifera’s drive made me realize how small acts can
              save lives.”
            </p>
            <span>– Aanya, Student Volunteer</span>
          </div>
          <div className="testimonial">
            <p>
              “The Lifera community feels like a family united for a great
              cause.”
            </p>
            <span>– Rahul, Donor</span>
          </div>
          <div className="testimonial">
            <p>
              “I’ve made lifelong friends while helping others. Truly fulfilling
              experience!”
            </p>
            <span>– Neha, Campus Coordinator</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
