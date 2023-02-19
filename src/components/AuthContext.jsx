import React, { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const login = (user) => {
    setCurrentUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);