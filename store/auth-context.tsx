import React from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [permissions, setPermissions] = React.useState([]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, role, setRole, permissions, setPermissions }}>
      {children}
    </AuthContext.Provider>
  );
};