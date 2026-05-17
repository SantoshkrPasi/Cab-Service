import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import Img1 from "../../assets/adminlogin/img_1.png";
import Img2 from "../../assets/adminlogin/img_2.png";
import Img3 from "../../assets/adminlogin/img.png";
import "../../styles/style.css";

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

      const response = await API.post("/admin/login", form);

      // Save Admin Data
      localStorage.setItem("admin", JSON.stringify(response.data));

      alert(response.data || "Admin Login Successful ✅");

      // Redirect to Admin Dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);

      alert(err?.response?.data || "Admin Login Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const slides = [
    {
      image: Img1,
      welcome: "WELCOME TO TAXI SERVICE",
      title: "Fast & Affordable Taxi Service",
      description: "Book your cab instantly and travel safely.",
    },

    {
      image: Img2,
      welcome: "SAFE JOURNEY",
      title: "Travel Comfortably Anytime",
      description: "Reliable taxi service across the city.",
    },

    {
      image: Img3,
      welcome: "24/7 AVAILABLE",
      title: "Best Cab Service For You",
      description: "Easy booking with secure rides.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${slides[currentIndex].image})`,
      }}
    >
      {/* Content */}
      <div className="login-content">
        {/* LEFT SECTION */}
        <div key={currentIndex} className="left-section">
          <p className="welcome-text">{slides[currentIndex].welcome}</p>

          <h1>
            {slides[currentIndex].title}
          </h1>

          <p className="description">
           {slides[currentIndex].description}
          </p>
        </div>
        <div className="right-section">
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
            <button onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Register Link */}
            <div className="login-link">
              <p>
                Don’t have an admin account?{" "}
                <span onClick={() => navigate("/admin/register")}>
                  Register
                </span>
              </p>

              {/* Forgot Password */}
              <p>
                Forgot Password?{" "}
                <span onClick={() => navigate("/admin/forgot-password")}>
                  Click here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
