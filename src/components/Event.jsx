import React from "react";
import "../styles/Event.css";

const Event = () => {
  return (
    <div className="event-page">
      <h1 className="event-title">Our Blood Donation Events</h1>
      <p className="event-subtitle">
        Here's a glimpse of the amazing work done by our volunteers and donors
        during our recent blood donation drives.
      </p>

      <div className="event-gallery">
        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Blood Donation Camp 2024"
          />
          <h3>Blood Donation Camp 2024</h3>
          <p>
            Held at City Hospital, this drive collected over 120 units of blood
            with support from 80+ volunteers.
          </p>
        </div>

        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/8460125/pexels-photo-8460125.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="College Blood Drive"
          />
          <h3>College Blood Drive</h3>
          <p>
            A successful collaboration with Lifera Community — students came
            together to donate and spread awareness.
          </p>
        </div>

        <div className="event-card">
          <img
            src="https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Community Camp"
          />
          <h3>Community Camp</h3>
          <p>
            Our neighborhood initiative — 90 local donors participated and
            helped save lives together.
          </p>
        </div>
      </div>

      <div className="event-video">
        <h2>Watch Our Journey</h2>
        <video
          className="video-player"
          controls
          width="100%"
          preload="metadata"
        >
          <source src="/public/blood-donation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Event;
