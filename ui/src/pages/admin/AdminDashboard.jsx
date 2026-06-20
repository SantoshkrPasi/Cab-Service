import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Dashboard from "./components/Dashboard";
import Trips from "./components/Trips";
import Users from "./components/Users";
import Button from "../../components/common/Button";
import bell from "../../assets/logo/bell.png";
import user1 from "../../assets/profile/profile.jpeg";
import "./style.css"
// import API from "../../api/axios";

function AdminDashboard() {
const menuItems = [
    {
      name: "Dashboard",
      subtitle: "Welcome back to dashboard",
    },
    {
      name: "Users",
      subtitle: "Fill in your trip details",
    },
    {
      name: "Trips",
      subtitle: "Track your journeys",
    },
  ];
  const [selected, setSelected] = useState("Dashboard");
  return (
    <div className="Admin-dashboard">
      <div className="Admin-sidebar">
        <div className="Admin-siderbar-1">
          <div className="Admin-head">
            <h1>ADMIN PANEL</h1>
          </div>
          <div className="head-content">
            <h2>Cab GO</h2>
            <p>Ride Made Easy</p>
          </div>
        </div>
        <div className="Admin-siderbar-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              title={item.name}
              onClick={() => setSelected(item.name)}
            />
          ))}
          <div className="Admin-logout">
            <button>Logout</button>
          </div>
        </div>
      </div>
      <div className="Admin-content">
        <Header
          title={menuItems.find((item) => item.name === selected)?.name}
          subtitle={menuItems.find((item) => item.name === selected)?.subtitle}
          bellImage={bell}
          profileImage={user1}
          notificationCount={3}
        />
        {selected === "Dashboard" && <Dashboard />}

        {selected === "Users" && <Users />}

        {selected === "Trips" && <Trips/>}

      </div>
    </div>
  );
  
}

export default AdminDashboard;