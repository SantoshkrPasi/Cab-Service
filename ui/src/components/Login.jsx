import { useState } from "react";
import API from "../api/axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/admin/login", {
        email,
        password,
      });
      console.log(res.data); // 👈 check here
      alert(res.data);
      if (res.data === "Login Successful") {
        navigate("/book-trip"); // 👈 redirect
      }
    } catch {
      alert("Login failed");
    }
  }
    return (
      <div>
        <h2>Login</h2>

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    );
}

export default Login;
