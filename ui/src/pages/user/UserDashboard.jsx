import React from "react";
import { useState } from "react";
import Button from "../../components/common/Button";
import taxiLogo from "../../assets/logo/taxi-logo.png";
import Dashboard from "./components/Dashboard";
import BookRide from "./components/BookRide";
import MyTrips from "./components/MyTrips";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import "./UserDashboard.css";

const UserDashboard = () => {
  const menuItems = [
    "Dashboard",
    "Book Ride",
    "My Trips",
    "Profile",
    "Settings",
  ];
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="user-dashboard">
      <div className="user-sidebar">
        <div className="user-siderbar-1">
          <div className="user-head-logo">
            <img src={taxiLogo} alt="Cab Logo" className="cab-logo" />
          </div>
          <div className="head-content">
            <h2>Cab GO</h2>
            <p>Ride Made Easy</p>
          </div>
        </div>
        <div className="user-siderbar-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              title={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>
      </div>
      <div className="user-content">
        {selected === "Dashboard" && <Dashboard />}

        {selected === "Book Ride" && <BookRide />}

        {selected === "My Trips" && <MyTrips />}

        {selected === "Profile" && <Profile />}

        {selected === "Settings" && <Settings />}
      </div>
    </div>
  );
};

export default UserDashboard;
