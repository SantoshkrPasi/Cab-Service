import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import "./adminLogin.css";

function AdminLogin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleLogin = async () => {

    // Validation
    if (!form.email || !form.password) {

      alert("Please fill all fields");

      return;
    }

    try {

      setLoading(true);

      const response = await API.post(
        "/admin/login",
        form
      );

      // Save Admin Data
      localStorage.setItem(
        "admin",
        JSON.stringify(response.data)
      );

      alert(response.data || "Admin Login Successful ✅");

      // Redirect to Admin Dashboard
      navigate("/admin/dashboard");

    } catch (err) {

      console.error(err);

      alert(
        err?.response?.data ||
        "Admin Login Failed ❌"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Admin Login</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
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

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="login-link">

          Don’t have an admin account?{" "}

          <span
            onClick={() =>
              navigate("/admin/register")
            }
          >
            Register
          </span>

        </p>

        {/* Forgot Password */}
        <p className="login-link">

          Forgot Password?{" "}

          <span
            onClick={() =>
              navigate("/admin/forgot-password")
            }
          >
            Click here
          </span>

        </p>

      </div>

    </div>
  );
}

export default AdminLogin;