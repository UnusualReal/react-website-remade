import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();             // 🚀 Perform logout immediately
    navigate("/login");   // 🔁 Redirect to login page (or /home if you prefer)
  }, [logout, navigate]);

  return null; // Nothing needs to be rendered
};

export default Logout;
