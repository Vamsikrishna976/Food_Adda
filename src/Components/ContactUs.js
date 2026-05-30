import React from "react";


const ContactUs = () => {
  if (navigator.onLine === false) {
    return (
      <div className="offline-container">
        <div className="offline-card">
          <div className="offline-icon">📡</div>
          <h2>You are offline</h2>
          <p>Please check your internet connection and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            type="tel"
            placeholder="Enter Your Mobile Number"
          />

          <textarea
            rows="5"
            placeholder="Write your message..."
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📧 support@foodadda.com</p>
          <p>📞 +91 9985936366</p>
          <p>📍 Bangalore, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;