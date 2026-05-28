import "./style/StatsCard.css";
function StatsCard({ title, value, percentage, subtitle, icon, bgColor }) {
  return (
    <div className="stats-card">
      <div className="card-icon" style={{ background: bgColor }}>
        {icon}
      </div>

      <div className="card-content">
        <p>{title}</p>

        <h2>{value}</h2>

        <span>↑ {percentage}</span>

        <small>{subtitle}</small>
      </div>
    </div>
  );
}

export default StatsCard;
