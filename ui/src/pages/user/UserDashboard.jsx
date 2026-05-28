import React from "react";
import { useState } from "react";
import Button from "../../components/common/Button";
import taxiLogo from "../../assets/logo/taxi-logo.png";
import Dashboard from "./components/Dashboard";
import BookRide from "./components/BookRide";
import MyTrips from "./components/MyTrips";
import Profile from "./components/Profile";
import Header from "../../components/common/Header";
import bell from "../../assets/logo/bell.png";
import user1 from "../../assets/profile/profile.jpeg";
import "./UserDashboard.css";

const UserDashboard = () => {
  const menuItems = [
    {
      name: "Dashboard",
      subtitle: "Welcome back to dashboard",
    },
    {
      name: "Book Ride",
      subtitle: "Fill in your trip details",
    },
    {
      name: "My Trips",
      subtitle: "Track your journeys",
    },
    {
      name: "Profile",
      subtitle: "Manage your account",
    },
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
              title={item.name}
              onClick={() => setSelected(item.name)}
            />
          ))}
          <div className="user-logout">
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="user-content">
        <Header
          title={menuItems.find((item) => item.name === selected)?.name}
          subtitle={menuItems.find((item) => item.name === selected)?.subtitle}
          bellImage={bell}
          profileImage={user1}
          notificationCount={3}
        />
        {selected === "Dashboard" && <Dashboard />}

        {selected === "Book Ride" && <BookRide />}

        {selected === "My Trips" && <MyTrips />}

        {selected === "Profile" && <Profile />}
      </div>
    </div>
  );
};

export default UserDashboard;
