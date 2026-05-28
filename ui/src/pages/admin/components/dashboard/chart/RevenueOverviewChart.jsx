import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./chart.css";

const data = [
  { day: "Mon", revenue: 20000 },
  { day: "Tue", revenue: 22000 },
  { day: "Wed", revenue: 30000 },
  { day: "Thu", revenue: 25000 },
  { day: "Fri", revenue: 35000 },
  { day: "Sat", revenue: 42000 },
  { day: "Sun", revenue: 25000 },
];

function RevenueOverviewChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Revenue Overview</h3>

        <select>
          <option>This Week</option>
        </select>
      </div>

      <div className="graph-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" fill="#9333ea" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueOverviewChart;
