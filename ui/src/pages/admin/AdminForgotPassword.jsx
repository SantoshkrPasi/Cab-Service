import { useState } from "react";
// import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

function AdminForgotPassword() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle forgot password
  // const handleForgotPassword = async () => {

  //   // Validation
  //   if (
  //     !form.email ||
  //     !form.password ||
  //     !form.confirmPassword
  //   ) {
  //     alert("Please fill all fields");
  //     return;
  //   }

  //   // Password match validation
  //   if (form.password !== form.confirmPassword) {
  //     alert("Passwords do not match ❌");
  //     return;
  //   }

  //   try {

  //     setLoading(true);

  //     // API Call
  //     const response = await API.post(
  //       "admin/forgot-password",
  //       null,
  //       {
  //         params: {
  //           email: form.email,
  //           password: form.password,
  //         },
  //       }
  //     );

  //     alert(response.data);

  //     // Redirect to admin login
  //     navigate("/admin/login");

  //   } catch (err) {

  //     console.error(err);

  //     alert(
  //       err?.response?.data ||
  //       "Password change failed ❌"
  //     );

  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="forgotpassword-container">

      <div className="forgotpassword-card">

        <h2>Admin Forgot Password</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Admin Email"
          value={form.email}
          onChange={handleChange}
        />

        {/* New Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter New Password"
          value={form.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {/* Button */}
        <button
          onClick={handleForgotPassword}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Password"}
        </button>

        {/* Admin Login */}
        <p className="forgotpassword-link">
          Back to Login ?{" "}
          <span onClick={() => navigate("/admin-login")}>
            Admin Login
          </span>
        </p>

        {/* Admin Register */}
        <p className="forgotpassword-link">
          Don’t have an admin account?{" "}
          <span onClick={() => navigate("/admin-register")}>
            Register
          </span>
        </p>

      </div>

    </div>
  );
}

export default AdminForgotPassword;