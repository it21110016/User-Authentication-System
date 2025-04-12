import { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) throw new Error("No token found");

        const decodedUser = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        setUser({ role: decodedUser.role, email: decodedUser.email });
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const data = await AuthService.login(email, password);
    setUser({ role: data.role, email: data.email });
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;