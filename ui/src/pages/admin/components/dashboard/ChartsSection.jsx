import TripsOverviewChart from "./chart/TripsOverviewChart";
import RevenueOverviewChart from "./chart/RevenueOverviewChart";
import UserGrowthChart from "./chart/UserGrowthChart";

import "./style/ChartsSection.css";

function ChartsSection() {
  return (
    <div className="charts-container">

      <TripsOverviewChart />

      <RevenueOverviewChart />

      <UserGrowthChart />

    </div>
  );
}

export default ChartsSection;