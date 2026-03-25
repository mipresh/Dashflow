import { FiHome, FiBarChart2, FiUsers, FiSettings } from "react-icons/fi";

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpen }) {
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
          <li onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 cursor-pointer">
            <FiHome /> <span>Dashboard</span>
          </li>
          <li onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 cursor-pointer">
            <FiBarChart2 /> <span>Analytics</span>
          </li>
          <li onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 cursor-pointer">
            <FiUsers /> <span>Users</span>
          </li>
          <li onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2 cursor-pointer">
            <FiSettings /> <span>Settings</span>
          </li>
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