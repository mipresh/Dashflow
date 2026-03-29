import { FiHome, FiBarChart2, FiUsers, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {

const handleLogout = () => {
  localStorage.removeItem("auth");
  window.location.href = "/login";
};
  return (
    
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-gray-800 p-4 z-40 transform transition-transform duration-300
        ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
        sm:translate-x-0 sm:relative sm:block`}
      >
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Dashboard
        </h2>

        <ul className="space-y-4">
  <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
    <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
      <FiHome /> <span>Dashboard</span>
    </li>
  </Link>

  <Link to="/analytics" onClick={() => setMobileMenuOpen(false)}>
    <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
      <FiBarChart2 /> <span>Analytics</span>
    </li>
  </Link>

  <Link to="/users" onClick={() => setMobileMenuOpen(false)}>
    <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
      <FiUsers /> <span>Users</span>
    </li>
  </Link>

  <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
    <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
      <FiSettings /> <span>Settings</span>
    </li>
  </Link>

  <NavLink
  to="/analytics"
  className={({ isActive }) =>
    `flex items-center space-x-2 cursor-pointer ${
      isActive ? "text-blue-500 font-bold" : ""
    }`
  }
>
  <FiBarChart2 /> <span>Analytics</span>
</NavLink>
<button onClick={handleLogout}>
  Logout
</button>
</ul>
      </aside>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={() => setMobileMenuOpen(false)}
          
        />
     
     )}
     
    </>
  );
}
