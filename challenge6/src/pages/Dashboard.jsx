// src/pages/Dashboard.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Panel Privado (Dashboard)</h2>
      {user && <p>Bienvenido, {user.username}!</p>}
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
}

export default Dashboard;
