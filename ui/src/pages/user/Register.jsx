import { useState } from "react";
import API from '../../api/axios';
import { useNavigate } from "react-router-dom";
import './styles.css';

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
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>

        <div className="input-group">
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
        </div>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          name="mobileNo"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
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
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;