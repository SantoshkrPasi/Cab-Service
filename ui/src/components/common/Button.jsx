import React from 'react'
const Button = (props) => {
  return (
<div
 
>
<button
onClick={props.onClick}
  style={{
    width: "320px", // same width for all
    height: "55px", // same height
    padding: "14px 20px",
    fontSize: "18px",
    fontWeight: "600",
    color: "white",
    background: "rgba(247, 0, 0, 0.15)",
    border: "none",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    cursor: "pointer",
    transition: "0.3s ease",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)"
  }}
  onMouseOver={(e) => {
    e.target.style.transform = "scale(1.05)";
    e.target.style.background =
      "rgba(255,255,255,0.25)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.background =
      "rgba(255,255,255,0.15)";
  }}
>
  {props.title}
</button>
</div>
  )
}

export default Button
