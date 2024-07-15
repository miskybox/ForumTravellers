// Logout.jsx
import React from "react";
import { useAuth } from "../context/UseAuth";

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Logout;
