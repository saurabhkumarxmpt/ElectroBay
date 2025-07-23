import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const AdminNavbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-3 shadow flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-xl font-bold">
        <span className="text-blue-400">Electro</span>Admin
      </div>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-5">
        {/* Profile */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={22} />
          <span className="hidden sm:inline">Admin</span>
        </div>

        {/* Logout Button */}
        <button className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition">
          <FiLogOut size={16} />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
