import React, { useState } from "react";
import { loginUser } from "./api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await loginUser({ email, password });

    if (response.token) {
      localStorage.setItem("token", response.token); // Save token in local storage
      alert("Login successful!");
    } else {
      alert(response.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
