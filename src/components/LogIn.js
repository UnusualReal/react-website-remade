import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import './LogIn.css';

const LogIn = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState(""); 
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await login(identifier, password);

    if (result.success) {
      navigate("/home");
    } else {
      alert("Login failed: " + result.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Вход</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Име или Email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Парола"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Потвърди</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
