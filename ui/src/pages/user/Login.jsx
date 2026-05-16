import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

import taxiImage from "../../assets/taxi.png";

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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
  const handleLogin = async () => {

    // Validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      const response = await API.post(
        "/login",
        form
      );

      // Save userId
      localStorage.setItem(
        "userId",
        response.data.userId
      );

      alert(
        response.data.message ||
        "Login Successful ✅"
      );

      // Navigate to dashboard
      navigate("/dashboard");

    } catch (err) {

      console.error(err);

      alert(
        err?.response?.data ||
        "Login failed ❌"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <div
      className="login-page"
      style={{
        backgroundImage: `url(${taxiImage})`,
      }}
    >

      {/* CONTENT */}
      <div className="login-content">

        {/* LEFT SECTION */}
        <div className="left-section">

          <p className="welcome-text">
            WELCOME TO TAXI SERVICE
          </p>

          <h1>
            Fast & Affordable <br />
            Taxi Service!
          </h1>

          <p className="description">
            Book your cab instantly and travel safely
            with our reliable taxi service across the city.
          </p>

        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">

          <div className="login-card">

            <h2 style={{
                  color: "rgba(20,25,25,0.8)",
                }}>Login</h2>

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={handleChange}
            />

            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "12px"
              }}
            >
              {
                loading
                  ? "Logging in..."
                  : "Login"
              }
            </button>

            {/* REGISTER */}
            <p className="login-link">
              Don’t have an account?{" "}
              <span
                onClick={() =>
                  navigate("/register")
                }
              >
                Register
              </span>
            </p>

            {/* FORGOT PASSWORD */}
            <p className="login-link">
              Forgot Password?{" "}
              <span
                onClick={() =>
                  navigate("/forgot-password")
                }
              >
                Click Here
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;