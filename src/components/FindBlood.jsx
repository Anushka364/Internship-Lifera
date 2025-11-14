import React, { useState } from "react";
import "../styles/FindBlood.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";


const FindBlood = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    attendeeName: "",
    phone: "",
    bloodGroup: "",
    quantity: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "bloodRequests"), {
      ...formData,
      createdAt: new Date(),
    });

    alert("Request submitted successfully! Our team will reach out soon.");

    // Clear form
    setFormData({
      patientName: "",
      attendeeName: "",
      phone: "",
      bloodGroup: "",
      quantity: "",
      address: "",
    });

  } catch (error) {
    alert("Error submitting request: " + error.message);
  }
};


  //const handleSubmit = async(e) => {
    //e.preventDefault();

    //alert("Request submitted successfully! Our team will reach out soon.");
    //setFormData({
      //patientName: "",
      //attendeeName: "",
      //phone: "",
     // bloodGroup: "",
      //quantity: "",
     // address: "",
    //});
  //};

  return (
    <section className="find-blood-page">
      {/* Header Section */}
      <div className="find-blood-header">
        <h1>Find Blood Donors Near You Immediately!</h1>
        <p>
          Lifera has a large community of blood donors. Send blood requests to
          those near you at the click of a button!
        </p>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1️⃣ Create Request</h3>
            <p>Fill up a simple form.</p>
          </div>
          <div className="step">
            <h3>2️⃣ Save Lives</h3>
            <p>Help those in need when you can!</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-sectionfind">
        <h2>Submit Your Blood Request</h2>
        <form className="blood-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="attendeeName"
              placeholder="Attendee Name"
              value={formData.attendeeName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Attendee Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <input
              type="number"
              name="quantity"
              placeholder="Required Quantity (units)"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default FindBlood;
