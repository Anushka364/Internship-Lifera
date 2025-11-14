import React from "react";
import "/src/styles/AboutUs.css";
// import team1 from "/src/images/team1.jpg";
// import team2 from "/src/images/team2.jpg";

const AboutUs = () => {
  return (
    <main className="about-page">
      {/* HERO / INTRO */}
      <section className="about-hero">
        <div className="hero-inner">
          <h1>About Lifera</h1>
          <p>
            Lifera is a community-driven platform that connects blood donors
            with those in need — faster, safer, and smarter. Our mission is
            simple: ensure no life is lost for lack of blood.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We build a dependable network of donors and hospitals so emergency
          blood needs are met immediately. We combine verified donor profiles,
          location-based matching and community outreach to save lives.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How Lifera Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Request or Search</h3>
            <p>
              Post a blood requirement or search by blood group and location.
            </p>
          </div>

          <div className="step">
            <div className="step-num">2</div>
            <h3>Match & Notify</h3>
            <p>Verified donors nearby receive instant notifications.</p>
          </div>

          <div className="step">
            <div className="step-num">3</div>
            <h3>Connect & Confirm</h3>
            <p>
              Donor and requester coordinate donation and confirm the process.
            </p>
          </div>

          <div className="step">
            <div className="step-num">4</div>
            <h3>Follow-up</h3>
            <p>Donation records, thank-you notes, and reminders for donors.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <div className="offer-section">
        <h3>What Lifera Offers</h3>
        <div className="offer-items">
          <div className="offer-item">
            <h4>Real-Time Donor Tracking</h4>
            <p>Find available donors near you with instant location updates.</p>
          </div>

          <div className="offer-item">
            <h4>Emergency Requests</h4>
            <p>
              Request blood urgently and get matched with nearby volunteers
              quickly.
            </p>
          </div>

          <div className="offer-item">
            <h4>Awareness Drives</h4>
            <p>
              Join our blood donation awareness campaigns and make an impact.
            </p>
          </div>
        </div>
      </div>

      {/* IMPACT / STATS */}
      <section className="impact">
        <h2>Our Impact So Far</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-num">10,000+</div>
            <div className="stat-label">Registered Donors</div>
          </div>

          <div className="stat">
            <div className="stat-num">4,500+</div>
            <div className="stat-label">Donations Coordinated</div>
          </div>

          <div className="stat">
            <div className="stat-num">1,200+</div>
            <div className="stat-label">Requests Fulfilled</div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team">
        <h2>The Team Behind Lifera</h2>
        <p>
          Lifera is built by a small team of developers, volunteers and health
          advocates. We are students and professionals committed to making blood
          donation simple, safe and accessible.
        </p>
        <div className="team-grid">
          <div className="team-card">
            {/* <img src={team1} alt="Team member" /> */}
            <h4>Dyuti Saini</h4>
            <p>Frontend Developer</p>
          </div>

          <div className="team-card">
            {/* <img src={team2} alt="Team member" /> */}
            <h4>Member Two</h4>
            <p>Backend & Integrations</p>
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="safety">
        <h2>Safety & Verification</h2>
        <ul>
          <li>Donors can upload ID and donation history for verification.</li>
          <li>Hospital partners are verified before listing.</li>
          <li>We provide donation guidelines and follow-up reminders.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h3>Ready to save lives?</h3>
        <div className="cta-buttons">
          <button onClick={() => (window.location.href = "/register")}>
            Join as Donor
          </button>
          <button
            className="secondary"
            onClick={() => (window.location.href = "/contact")}
          >
            Report an Emergency
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
