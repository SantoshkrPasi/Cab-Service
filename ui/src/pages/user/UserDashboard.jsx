import React, { useEffect, useState } from "react";
import { bookTrip, getTrips } from "../../api/tripsApi";
import "./styles/userDashboard.css";

const UserDashboard = () => {

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [trips, setTrips] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const res = await getTrips(userId);
      setTrips(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}-${String(
      d.getMonth() + 1
    ).padStart(2, "0")}-${d.getFullYear()} ${String(
      d.getHours()
    ).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:00`;
  };

  const handleBookRide = async () => {
    if (!source || !destination || !pickupDate || !returnDate) {
      alert("All fields are required");
      return;
    }

    try {
      const tripData = {
        origin: source,
        destination: destination,
        dateOfPickup: formatDate(pickupDate),
        dateOfReturn: formatDate(returnDate),
      };

      await bookTrip(userId, tripData);

      alert("Trip Booked Successfully 🚀");

      fetchTrips();

      setSource("");
      setDestination("");
      setPickupDate("");
      setReturnDate("");

    } catch (error) {
      alert("Booking Failed ❌");
      console.error(error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h2>🚖 Cab Booking Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* BOOKING SECTION */}
      <div className="dashboard-card">
        <h3>Book Your Ride</h3>

        <div className="form-grid">
          <input
            placeholder="📍 Pickup Location"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />

          <input
            placeholder="🏁 Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />

          <div>
            <label>Pickup Date & Time</label>
            <input
              type="datetime-local"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </div>

          <div>
            <label>Return Date & Time</label>
            <input
              type="datetime-local"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
            />
          </div>
        </div>

        <button className="book-btn" onClick={handleBookRide}>
          Book Ride
        </button>
      </div>

      {/* TRIPS SECTION */}
      <div className="card">
        <h3>My Trips</h3>

        {trips.length === 0 ? (
          <p className="empty">No trips found</p>
        ) : (
          <table className="trip-table">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Pickup</th>
                <th>Return</th>
                <th>Status</th>
                <th>Fare</th>
              </tr>
            </thead>

            <tbody>
              {trips.map((trip, index) => (
                <tr key={index}>
                  <td>{trip.origin}</td>
                  <td>{trip.destination}</td>
                  <td>{trip.dateOfPickup}</td>
                  <td>{trip.dateOfReturn}</td>
                  <td>{trip.paymentStatus}</td>
                  <td>₹{trip.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default UserDashboard;