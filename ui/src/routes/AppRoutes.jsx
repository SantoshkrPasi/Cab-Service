import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import UserDashboard from "../pages/user/UserDashboard";
import AdminRegister from "../pages/admin/AdminRegister";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Login />} />

        {/* User Register */}
        <Route path="/register" element={<Register />} />

        {/* Optional: Login route explicitly */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        {/* AdminRegister          */}
        <Route path="/admin/register" element={<AdminRegister />}/>
        <Route path="/admin/login" element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;