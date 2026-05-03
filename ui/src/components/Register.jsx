import { useState } from "react";
import API from "../api/axios";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      const res = await API.post("/user/register", form);
      alert("Registered successfully");
    } catch {
      alert("Error");
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="First Name" onChange={(e) => setForm({...form, firstName: e.target.value})}/>
      <input placeholder="Last Name" onChange={(e) => setForm({...form, lastName: e.target.value})}/>
      <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
      <input placeholder="Mobile" onChange={(e) => setForm({...form, mobileNo: e.target.value})}/>
      <input placeholder="Gender" onChange={(e) => setForm({...form, gender: e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;