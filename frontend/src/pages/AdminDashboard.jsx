import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import apiRequest from "../services/api";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const data = await apiRequest("http://localhost:5000/api/v1/user/admin-dashboard");
        setUser(data.user);
      } catch (err) {
        console.error("Unauthorized", err);
        AuthService.logout();
        navigate('/access-denied');
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [navigate]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-half">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome to Admin Dashboard</h2>
        {user && (
          <div className="text-center">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
