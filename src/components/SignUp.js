import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext'; // For managing auth context

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuthContext(); // Assuming `signup` is a function that creates a new user
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    // Call your signup API or logic here
    try {
      await signup(username, password); // Signup function to create the user
      navigate('/login'); // Redirect to login after successful signup
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}

export default Signup;
