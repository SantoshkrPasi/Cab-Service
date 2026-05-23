import React from "react";
import "./style/Dashboard.css";
import user1 from "../../../assets/profile/profile.jpeg";
import Card from "../components/Card/Card";
import carBanner from "../../../assets/banner/car-banner.png";


const Dashboard = () => {
  const cards = [
    {
      id: 1,
      icon: user1,
      title: "Total Trips",
      value: "24",
      subtitle: "All Time",
    },
    {
      id: 2,
      icon: user1,
      title: "Bookings",
      value: "12",
      subtitle: "Today",
    },
    {
      id: 3,
      icon: user1,
      title: "Revenue",
      value: "₹25K",
      subtitle: "This Month",
    },
    {
      id: 4,
      icon: user1,
      title: "Customers",
      value: "150",
      subtitle: "Active Users",
    },
  ];

  return (
    <div className="cab-dashboard">
      <div className="cab-dashboard-card">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            value={card.value}
            subtitle={card.subtitle}
          />
        ))}
      </div>
      <div
        className="cab-dashboard-image"
        style={{
          backgroundImage: `url(${carBanner})`,
        }}
      >
        <div className="cab-banner-content">
          <h3>Need a ride?</h3>

          <h1>We're here for you!</h1>

          <p>Book a safe, comfortable and affordable ride anytime, anywhere.</p>

          <button>Book a Ride →</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
