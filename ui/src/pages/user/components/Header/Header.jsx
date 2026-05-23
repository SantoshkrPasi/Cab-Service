import React from "react";
import "../style/Header.css";

const Header = ({
  title,
  subtitle,
  bellImage = defaultBell,
  profileImage = defaultUser,
  showNotification = true,
  notificationCount = 1
}) => {
  return (
    <header className="cab-header">

      <div className="cab-header-left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      <div className="cab-header-right">

        <button className="cab-bell-wrapper">

          <img
            src={bellImage}
            alt="notification"
            className="cab-bell"
          />

          {showNotification && (
            <span className="cab-dot">
              {notificationCount}
            </span>
          )}

        </button>

        <div className="cab-user">
          <img
            src={profileImage}
            alt="profile"
          />
        </div>

      </div>

    </header>
  );
};

export default Header;