import React from "react";
import "../style/Card.css";

const Card = ({
  icon,
  title,
  value,
  subtitle
}) => {
  return (
    <div className="cab-card">

      <div className="cab-card-icon">
        <img
          src={icon}
          alt={title}
        />
      </div>

      <div className="cab-card-content">

        <h4>{title}</h4>

        <h2>{value}</h2>

        <p>{subtitle}</p>

      </div>

    </div>
  );
};

export default Card;