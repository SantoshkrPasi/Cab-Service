import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import UserDashboard from "../pages/user/UserDashboard";
import AdminRegister from "../pages/admin/AdminRegister";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ForgotPassword from "../pages/user/ForgotPassword";
import AdminForgotPassword from "../pages/admin/AdminForgotPassword";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route → Login */}
        <Route path="/" element={<Login />} />

        {/* User Register */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<UserDashboard />} />

        {/* AdminRegister          */}
        <Route path="/admin/register" element={<AdminRegister />}/>
        <Route path="/admin/login" element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;