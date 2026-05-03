import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;