import { Link, useNavigate } from "react-router-dom";
import  useAuth  from "../context/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-lg font-bold">MyApp</Link>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>{user.email}</span>
            <button
              onClick={() => {
                handleLogout();
              }}
              className="bg-red-500 px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
