import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import Img from "../../assets/adminRegister/img.png";
import "../../styles/style.css";

function AdminRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    password: "",
    adminCode: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register
  const handleRegister = async () => {
    // Validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.mobileNo ||
      !form.gender ||
      !form.password ||
      !form.adminCode
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/admin/register", form);

      alert(response.data || "Admin Registered Successfully ✅");

      // Redirect to Admin Login
      navigate("/admin/login");
    } catch (err) {
      console.error(err);

      if (err.response?.data) {
        alert(err.response.data);
      } else {
        alert("Admin Registration Failed ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div className="login-content">
        <div className="left-section">
          <h1>Join Our Taxi Service 🚖</h1>

          <p>
            Book rides instantly, travel safely, and enjoy affordable pricing
            across the city.
          </p>

          <ul>
            <li>✔ Fast & reliable booking</li>
            <li>✔ Safe verified drivers</li>
            <li>✔ Affordable pricing</li>
            <li>✔ 24/7 service support</li>
          </ul>
        </div>
        {/* LEFT INFO SECTION */}
        <div className="right-section">
          <div className="login-card">
          <h2>Admin Register</h2>

          {/* First Name + Last Name */}
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          {/* Mobile Number */}
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile Number"
            value={form.mobileNo}
            onChange={handleChange}
          />

          {/* Gender */}
          <select className="gender-select" name="gender" value={form.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>

          {/* Admin Code */}
          <input
            type="text"
            name="adminCode"
            placeholder="Enter Admin Code"
            value={form.adminCode}
            onChange={handleChange}
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {/* Register Button */}
          <button onClick={handleRegister} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Login Link */}
          <p className="login-link">
            Already have an admin account?{" "}
            <span onClick={() => navigate("/admin/login")}>Login</span>
          </p>
        </div>
        </div>
       </div> 
      </div>
  );
}

export default AdminRegister;
