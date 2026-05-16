import { useState } from "react";
import API from '../../api/axios';
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleLogin = async () => {
    // Basic validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/login", form);
      localStorage.setItem("userId", response.data.userId);
      alert(response.data || "Login successful ✅");

      // Redirect after login
      navigate("/dashboard"); // change if needed
    } catch (err) {
      console.error(err);
      alert(
        err?.response?.data || "Login failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="login-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>
            Register
          </span>
        </p>

        <p className="login-link">
          Forgot Password?{" "}
          <span onClick={() => navigate("/forgot-password")}>
            Click here
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;