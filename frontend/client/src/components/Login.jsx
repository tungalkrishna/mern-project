import { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const res = await axios.post("https://mern-project-1-091l.onrender.com/api/auth/login", form);

      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");
      navigate("/"); // go to home page
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {errorMsg && <p className="error">{errorMsg}</p>}

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button type="submit">Login</button>

        <p className="redirect">
          New user? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}
