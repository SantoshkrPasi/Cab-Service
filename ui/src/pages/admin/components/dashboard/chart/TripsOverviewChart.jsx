import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./chart.css";

const data = [
  { day: "Mon", trips: 20 },
  { day: "Tue", trips: 40 },
  { day: "Wed", trips: 30 },
  { day: "Thu", trips: 60 },
  { day: "Fri", trips: 60 },
  { day: "Sat", trips: 80 },
  { day: "Sun", trips: 60 },
];

function TripsOverviewChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h3>Trips Overview</h3>

        <select>
          <option>This Week</option>
        </select>
      </div>

      <div className="graph-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="trips"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TripsOverviewChart;
