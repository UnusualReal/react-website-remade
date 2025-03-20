import React from "react";
import { useAuthContext } from "../context/authContext"; // Correct import

const LogOut = () => {
  const { logout } = useAuthContext(); // Get logout function from context

  const handleLogout = () => {
    logout(); // Perform logout
    // Optionally, you can navigate to a different route after logging out
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogOut;
