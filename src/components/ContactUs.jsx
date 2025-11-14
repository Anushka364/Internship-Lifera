import React, { useState } from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Lifera</h1>
        <p className="subtitle">
          Have a question, idea, or want to collaborate? Get in touch with our
          team. We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div>
            <h3>📍 Address</h3>
            <p>123 Lifera Foundation Street, New Delhi, India</p>
          </div>
          <div>
            <h3>📧 Email</h3>
            <p>support@lifera.org</p>
          </div>
          <div>
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Lifera Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7605190286734!2d77.20902191508325!3d28.61393998242616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1f20e1c53d%3A0xf12f998b40d86df0!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1699098811113!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ContactUs;
