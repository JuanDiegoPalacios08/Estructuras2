// src/context/AuthContext.jsx
import { createContext, useState } from "react";

// 1. Creamos el contexto
export const AuthContext = createContext();

// 2. Creamos el proveedor de autenticación
export function AuthProvider({ children }) {
  // Estado para almacenar al usuario actual (null = no logueado)
  const [user, setUser] = useState(null);

  // Login "falso"
  const login = (username, password) => {
    // Aquí puedes poner tu lógica de validación real o simplemente hacer un if
    if (username === "admin" && password === "123") {
      setUser({ username });
      return true;
    }
    return false;
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
