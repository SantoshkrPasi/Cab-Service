import "./trips/Trips.css";

import { useState } from "react";

import {
  Eye,
  CircleX
} from "lucide-react";

function Trips() {

  const trips = [
    {
      tripId: "TRP1254",
      user: "Rahul Verma",
      source: "MG Road",
      destination: "Airport",
      fare: "₹450",
      status: "Completed",
      bookedOn: "28 May 2026 10:30 AM",
    },

    {
      tripId: "TRP1253",
      user: "Priya Singh",
      source: "Whitefield",
      destination: "Electronic City",
      fare: "₹350",
      status: "Ongoing",
      bookedOn: "28 May 2026 09:15 AM",
    },

    {
      tripId: "TRP1252",
      user: "Amit Shah",
      source: "Koramangala",
      destination: "Indiranagar",
      fare: "₹280",
      status: "Completed",
      bookedOn: "28 May 2026 08:45 AM",
    },

    {
      tripId: "TRP1251",
      user: "Sneha Kapoor",
      source: "HSR Layout",
      destination: "MG Road",
      fare: "₹260",
      status: "Cancelled",
      bookedOn: "28 May 2026 08:20 AM",
    },

    {
      tripId: "TRP1250",
      user: "Vikram Rao",
      source: "Airport",
      destination: "Whitefield",
      fare: "₹480",
      status: "Ongoing",
      bookedOn: "28 May 2026 07:50 AM",
    },

    {
      tripId: "TRP1249",
      user: "Karan Mehta",
      source: "JP Nagar",
      destination: "BTM Layout",
      fare: "₹300",
      status: "Completed",
      bookedOn: "27 May 2026 06:40 PM",
    },

    {
      tripId: "TRP1248",
      user: "Neha Joshi",
      source: "Marathahalli",
      destination: "Whitefield",
      fare: "₹320",
      status: "Ongoing",
      bookedOn: "27 May 2026 05:15 PM",
    },

    {
      tripId: "TRP1247",
      user: "Arjun Kumar",
      source: "MG Road",
      destination: "Koramangala",
      fare: "₹290",
      status: "Cancelled",
      bookedOn: "27 May 2026 04:30 PM",
    },
  ];

  const tripsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * tripsPerPage;

  const firstIndex = lastIndex - tripsPerPage;

  const currentTrips = trips.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(trips.length / tripsPerPage);

  return (
    <div className="trips-table-container">

      <table className="trips-table">

        <thead>

          <tr>
            <th>Trip ID</th>
            <th>User</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Fare</th>
            <th>Status</th>
            <th>Booked On</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {currentTrips.map((trip, index) => (

            <tr key={index}>

              <td>{trip.tripId}</td>

              <td>{trip.user}</td>

              <td>{trip.source}</td>

              <td>{trip.destination}</td>

              <td>{trip.fare}</td>

              <td>
                <span
                  className={
                    trip.status === "Completed"
                      ? "status completed"
                      : trip.status === "Ongoing"
                      ? "status ongoing"
                      : "status cancelled"
                  }
                >
                  {trip.status}
                </span>
              </td>

              <td>{trip.bookedOn}</td>

              <td>

                <div className="action-buttons">

                  <button>
                    <Eye size={16} />
                  </button>

                  <button>
                    <CircleX size={16} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="table-footer">

        <p>
          Showing {firstIndex + 1} to{" "}
          {Math.min(lastIndex, trips.length)} of{" "}
          {trips.length} trips
        </p>

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, index) => (

            <button
              key={index}
              className={
                currentPage === index + 1
                  ? "active-page"
                  : ""
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>

          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {">"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Trips;