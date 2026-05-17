import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/userRegister/img.png";
import "../../styles/style.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle register
  const handleRegister = async () => {
    // Basic validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.mobileNo ||
      !form.gender ||
      !form.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      await API.post("/register", form);
      alert("Registered successfully ✅");

      // Redirect to login
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed ❌");
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
        {/* LEFT INFO SECTION */}
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
        {/*Right Section*/}
        <div className="right-section">
          <div className="login-card">
            <h2>Create Account</h2>
            <input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />

            <input name="email" placeholder="Email" onChange={handleChange} />

            <input
              name="mobileNo"
              placeholder="Mobile Number"
              onChange={handleChange}
            />

            <select className="gender-select" name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button onClick={handleRegister} disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="login-link">
              <p> Already have an account? </p>
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
