import React from "react";
import "./style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="cab-dashboard">
      <div className="cab-dashboard-header">
        <div className="cab-dashboard-header-text">
          <h1>Good Morning</h1>
          <p>Welcome Back to your Dashboard</p>
        </div>
        <div className="cab-dashboard-header-notification">
          <div className="bell">Emoji</div>
          <div className="user-img">Picture</div>
        </div>
      </div>
      <div className="cab-dashboard-card"></div>
      <div className="cab-dashboard-image"></div>
      <div className="cab-dashboard-trips"></div>
    </div>
  );
};

export default Dashboard;
