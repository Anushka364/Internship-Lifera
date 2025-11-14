import React from "react";
import { useState } from "react";
import "../styles/Center.css"; // we'll style it separately

const Center = () => {
  const [animate, setAnimate] = useState(true);

  const handleStopAnimation = () => {
    setAnimate(false);
  };
  return (
    <div className="center-container">
      <video autoPlay loop muted className="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="below-video"></div> */}

      <div className="overlay"></div>
      <div className="content">
        <h1 className={`animated-heading ${animate ? "loop" : ""}`}>
          <span>L</span>
          <span>i</span>
          <span>f</span>
          <span>e</span>
          <span>r</span>
          <span>a</span>
        </h1>

        <p>You trusted hub for blood Detection, Donation and Safety</p>
        <button className="start-btn" onClick={handleStopAnimation}>
          Get Started
        </button>
      </div>
      <div className="line"></div>
      <section className="below-video">
        <div className="choose">
          <h2>Why Choose Lifera?</h2>
          <p>
            Lifera connects blood donors and recipients seamlessly. Our mission
            is to ensure that no life is lost due to lack of blood availability
            — using real-time data, verified donors, and location-based
            matching.
          </p>
          <button>Explore More</button>
        </div>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Every second counts when it comes to saving lives. Lifera is built
            with the vision of creating a connected network of donors and
            recipients — ensuring that help is always just a click away.
          </p>
        </section>

        <section className="features">
          <h2>What Lifera Offers</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Find Nearby Donors</h3>
              <p>
                Locate verified blood donors instantly through real-time
                location tracking.
              </p>
            </div>
            <div className="feature-card">
              <h3>Register as a Donor</h3>
              <p>
                Join our community of heroes and save lives by becoming a
                registered donor.
              </p>
            </div>
            <div className="feature-card">
              <h3>Emergency Requests</h3>
              <p>
                Post urgent blood requests and get notified when a donor is
                available nearby.
              </p>
            </div>
            <div className="feature-card">
              <h3>Donation Events</h3>
              <p>
                Stay updated with upcoming blood donation camps and community
                drives.
              </p>
            </div>
          </div>
        </section>
        <section className="stats">
          <h2>Our Impact So Far</h2>
          <div className="stats-grid">
            <div>
              <h3>10,000+</h3>
              <p>Registered Donors</p>
            </div>
            <div>
              <h3>5,000+</h3>
              <p>Lives Saved</p>
            </div>
            <div>
              <h3>1,200+</h3>
              <p>Blood Requests Fulfilled</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Center;
