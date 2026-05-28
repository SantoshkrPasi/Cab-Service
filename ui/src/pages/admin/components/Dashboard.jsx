import StatsCard from "./dashboard/StatsCard";
import ChartsSection from "./dashboard/ChartsSection";
import "./dashboard/Dashboard.css";
import {
  Users,
  Car,
  Activity,
  IndianRupee
} from "lucide-react";

function Dashboard() {
  const cardsData = [
    {
      title: "Total Users",
      value: "245",
      percentage: "12.5%",
      subtitle: "from last month",
      icon: <Users size={28} color="white" />,
      bgColor: "linear-gradient(135deg, #2563eb, #3b82f6)"
    },

    {
      title: "Total Trips",
      value: "1,245",
      percentage: "18.6%",
      subtitle: "from last month",
      icon: <Car size={28} color="white" />,
      bgColor: "linear-gradient(135deg, #22c55e, #16a34a)"
    },

    {
      title: "Active Trips",
      value: "45",
      percentage: "8.3%",
      subtitle: "from last month",
      icon: <Activity size={28} color="white" />,
      bgColor: "linear-gradient(135deg, #f59e0b, #f97316)"
    },

    {
      title: "Revenue",
      value: "₹1,25,000",
      percentage: "15.2%",
      subtitle: "from last month",
      icon: <IndianRupee size={28} color="white" />,
      bgColor: "linear-gradient(135deg, #9333ea, #a855f7)"
    }
  ];

  return (
    <div className="dashboard-container">
    <div className="cards-container">
     {cardsData.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          percentage={card.percentage}
          subtitle={card.subtitle}
          icon={card.icon}
          bgColor={card.bgColor}
        />
      ))}
    </div>
    <div className="card-graph">
    <ChartsSection />
    </div>
    </div>
  );
}

export default Dashboard;