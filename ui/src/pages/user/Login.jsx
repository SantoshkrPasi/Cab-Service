import { useState , useEffect} from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Img1 from "../../assets/userlogin/img_1.png";
import Img2 from "../../assets/userlogin/img_2.png";
import Img3 from "../../assets/userlogin/img.png";

import "../../styles/style.css";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);
  // Handle login
  const handleLogin = async () => {
    // Validation
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/login", form);

      // Save userId
      localStorage.setItem("userId", response.data.userId);

      alert(response.data.message || "Login Successful ✅");

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error(err);

      alert(err?.response?.data || "Login failed ❌");
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

      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );

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
      {/* CONTENT */}
      <div className="login-content">
        {/* LEFT SECTION */}
        <div  key={currentIndex} className="left-section">
          <p className="welcome-text">{slides[currentIndex].welcome}</p>

          <h1>
            {slides[currentIndex].title}
          </h1>

          <p className="description">
             {slides[currentIndex].description}
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-section">
          <div className="login-card">
            <h2> Login </h2>

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
            <button onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* REGISTER */}
            <div className="login-link">
              <p>
                Don’t have an account?{" "}
                <span onClick={() => navigate("/register")}>Register</span>
              </p>

              {/* FORGOT PASSWORD */}
              <p>
                Forgot Password?{" "}
                <span onClick={() => navigate("/forgot-password")}>
                  Click Here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
