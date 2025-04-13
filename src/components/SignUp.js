import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import './SignUp.css'; 

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(username, email, password);
      if (result.success) {
        navigate('/login');
      } else {
        alert('Signup failed: ' + result.message);
      }
    } catch (error) {
      alert('Signup failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-heading">Регистрация</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input 
            type="text" 
            placeholder="Потребителско име" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
        <p className="login-prompt">
          Вече имате акаунт? <a href="/login">Вход</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
