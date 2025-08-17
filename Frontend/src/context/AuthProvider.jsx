import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.jsx";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // localStorage.clear();
    const existingData = getLocalStorage();
    if (!existingData.employees || !existingData.admin) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
