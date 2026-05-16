import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import "./adminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [trips, setTrips] = useState([]);

  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log("Admin Data:", admin);

  const totalRevenue = trips.reduce(
    (sum, trip) => sum + Number(trip.amount || 0),
    0
  );

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  // Fetch Users
  const fetchUsers = async () => {
    try {

      const response = await API.get("/users");

      setUsers(response.data);

    } catch (err) {

      console.error(err);
    }
  };

  // Fetch Trips
  const fetchTrips = async () => {
    try {
      const response = await API.get(`/trips` );
       console.log( "trips data : " + response.data);
      setTrips(response.data);

    } catch (err) {

      console.error(err);
    }
  };

  useEffect(() => {

    fetchUsers();
    fetchTrips();

  }, []);

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">

        <h2 className="logo">
            Menu
        </h2>

        <ul>

          <li>
            Dashboard
          </li>

          <li>
            Manage Users
          </li>

          <li>
            Manage Trips
          </li>

          <li>
            Bookings
          </li>

          <li onClick={handleLogout}>
            Logout
          </li>

        </ul>

      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Navbar */}
        <div className="navbar">

          <h2>
            Admin Dashboard
          </h2>

          <div className="admin-info">

            Welcome,{" "}

            {admin?.firstName || "Admin"}

          </div>

        </div>

        {/* Cards */}
        <div className="cards-container">

          <div className="card">

            <h3>Total Users</h3>

            <p>{users.length}</p>

          </div>

          <div className="card">

            <h3>Total Trips</h3>

            <p>{trips.length}</p>

          </div>

          <div className="card">
            <h3>Total Revenue</h3>
         <p> ₹{totalRevenue}</p>
          </div>
        </div>

        {/* Users Table */}
        <div className="table-section">

          <h3>Users List</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>
                    {user.firstName} {user.lastName}
                  </td>

                  <td>{user.email}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Trips Table */}
        <div className="table-section">

          <h3>Trips List</h3>

          <table>

            <thead>

              <tr>


                <th>Source</th>
                <th>Destination</th>
                <th>Fare</th>

              </tr>

            </thead>

            <tbody>

              {trips.map((trip) => (

                <tr key={trip.id}>

                  <td>{trip.origin}</td>

                  <td>{trip.destination}</td>

                  <td>₹{trip.amount}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;