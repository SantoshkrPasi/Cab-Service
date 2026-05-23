import React from "react";
import "./style/Profile.css";

import user1 from "../../../assets/profile/profile.jpeg";

const Profile = () => {
  return (
    <div className="cab-profile">

      {/* LEFT */}

      <div className="cab-profile-left">

        <div className="cab-user-card">

          <div className="cab-user-image">

            <img
              src={user1}
              alt="profile"
            />

            <button>
              ✎
            </button>

          </div>

          <h3>Rahul Sharma</h3>

          <p>
            rahul.sharma@example.com
          </p>

          <span>
            +91 98765 43210
          </span>

        </div>


        <div className="cab-profile-stats">

          <div className="cab-stat">

            <span>📅</span>

            <div>

              <p>Member since</p>

              <h4>January 2024</h4>

            </div>

          </div>


          <div className="cab-stat">

            <span>🟣</span>

            <div>

              <p>Total Trips</p>

              <h4>24</h4>

            </div>

          </div>

        </div>

      </div>


      {/* RIGHT */}

      <div className="cab-profile-right">

        <div className="cab-info">

          <div className="cab-title">

            <h3>Personal Information</h3>

            <button>Edit</button>

          </div>

          <div className="cab-row">
            <span>Full Name</span>
            <strong>Rahul Sharma</strong>
          </div>

          <div className="cab-row">
            <span>Email</span>
            <strong>rahul.sharma@example.com</strong>
          </div>

          <div className="cab-row">
            <span>Phone</span>
            <strong>+91 98765 43210</strong>
          </div>

          <div className="cab-row">
            <span>User ID</span>
            <strong>CABGO12345</strong>
          </div>

          <div className="cab-row">
            <span>Address</span>
            <strong>
              Koramangala,
              Bangalore,
              Karnataka,
              India
            </strong>
          </div>

        </div>


        <div className="cab-security">

          <h3>
            Security
          </h3>

          <div className="cab-security-box">

            <span>🔒</span>

            <div>

              <h4>Change Password</h4>

              <p>
                Update your password regularly
              </p>

            </div>

            <span>
              ›
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;