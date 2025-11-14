import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2>Lifera</h2>
          <p>
            Empowering lives through blood donation. Join our mission to make a
            difference — one drop at a time.
          </p>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📍 Delhi, India</p>
          <p>📧 support@lifera.org</p>
          <p>📞 +91 110123569</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 Lifera. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
