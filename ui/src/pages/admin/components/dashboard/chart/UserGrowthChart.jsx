import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./chart.css";

const data = [
  { day: "1 May", users: 80 },
  { day: "7 May", users: 120 },
  { day: "14 May", users: 160 },
  { day: "21 May", users: 200 },
  { day: "28 May", users: 250 },
];

function UserGrowthChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>User Growth</h3>

        <select>
          <option>This Month</option>
        </select>
      </div>

      <div className="graph-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              fill="#bbf7d0"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default UserGrowthChart;
