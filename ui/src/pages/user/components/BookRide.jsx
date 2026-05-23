import React from "react";
import "./style/BookRide.css";
import rideImage from "../../../assets/banner/car-banner.png";

const BookRide = () => {
  return (
    <div className="cab-bookride">

      {/* LEFT */}

      <div className="cab-bookride-form">

        <div className="cab-field">

          <label>Pickup Location</label>

          <input
            type="text"
            placeholder="📍 Enter pickup location"
          />

        </div>

        <div className="cab-field">

          <label>Destination</label>

          <input
            type="text"
            placeholder="📍 Enter destination"
          />

        </div>

        <div className="cab-date-row">

          <div className="cab-field">

            <label>Pickup Date & Time</label>

            <input
              type="text"
              placeholder="🗓 Select date & time"
            />

          </div>

          <div className="cab-field">

            <label>Return Date & Time</label>

            <input
              type="text"
              placeholder="🗓 Select date & time"
            />

          </div>

        </div>

        <button className="cab-book-btn">
          Book Ride
        </button>

      </div>


      {/* RIGHT */}

      <div className="cab-bookride-right">

        <div className="cab-bookride-image">

          <img
            src={rideImage}
            alt="book ride"
          />

        </div>


        <div className="cab-bookride-features">

          <div className="cab-feature">

            <span>🛡️</span>

            <h4>Safe Rides</h4>

            <p>Verified drivers</p>

          </div>


          <div className="cab-feature">

            <span>₹</span>

            <h4>Affordable</h4>

            <p>Best prices</p>

          </div>


          <div className="cab-feature">

            <span>📞</span>

            <h4>24/7 Support</h4>

            <p>We're here to help</p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookRide;