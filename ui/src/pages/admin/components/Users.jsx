import "./users/Users.css";

import { useState } from "react";

import {
  Eye,
  Pencil,
  Trash2
} from "lucide-react";

function Users() {

  const users = [
    {
      id: "USR245",
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      status: "Active",
      joined: "28 May 2026",
    },

    {
      id: "USR244",
      name: "Priya Singh",
      email: "priya@gmail.com",
      phone: "9123456780",
      status: "Active",
      joined: "27 May 2026",
    },

    {
      id: "USR243",
      name: "Amit Shah",
      email: "amit@gmail.com",
      phone: "9988776655",
      status: "Active",
      joined: "27 May 2026",
    },

    {
      id: "USR242",
      name: "Sneha Kapoor",
      email: "sneha@gmail.com",
      phone: "9911223344",
      status: "Blocked",
      joined: "26 May 2026",
    },

    {
      id: "USR241",
      name: "Vikram Rao",
      email: "vikram@gmail.com",
      phone: "9001122334",
      status: "Active",
      joined: "26 May 2026",
    },

    {
      id: "USR240",
      name: "Karan Mehta",
      email: "karan@gmail.com",
      phone: "9812345678",
      status: "Active",
      joined: "25 May 2026",
    },

    {
      id: "USR239",
      name: "Neha Joshi",
      email: "neha@gmail.com",
      phone: "9823456781",
      status: "Blocked",
      joined: "25 May 2026",
    },

    {
      id: "USR238",
      name: "Arjun Kumar",
      email: "arjun@gmail.com",
      phone: "9123456677",
      status: "Active",
      joined: "24 May 2026",
    },
  ];

  const usersPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * usersPerPage;

  const firstIndex = lastIndex - usersPerPage;

  const currentUsers = users.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="users-table-container">

      <table className="users-table">

        <thead>

          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Joined On</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {currentUsers.map((user, index) => (

            <tr key={index}>

              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.phone}</td>

              <td>
                <span
                  className={
                    user.status === "Active"
                      ? "status active"
                      : "status blocked"
                  }
                >
                  {user.status}
                </span>
              </td>

              <td>{user.joined}</td>

              <td>

                <div className="action-buttons">

                  <button>
                    <Eye size={16} />
                  </button>

                  <button>
                    <Pencil size={16} />
                  </button>

                  <button>
                    <Trash2 size={16} />
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
          {Math.min(lastIndex, users.length)} of{" "}
          {users.length} users
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

export default Users;