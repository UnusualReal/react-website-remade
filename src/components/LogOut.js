import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Logout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout();             
    navigate("/login");   
  }, [logout, navigate]);

  return null; 
};

export default Logout;
