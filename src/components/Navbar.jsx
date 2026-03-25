import { FiBell, FiSun, FiMoon, FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Navbar({ toggleDarkMode, searchTerm, setSearchTerm, setMobileMenuOpen }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between">
      
      {/* LEFT: Hamburger + Search */}
      <div className="flex items-center space-x-3">
        {/* Hamburger (ONLY MOBILE) */}
        <button
          className="sm:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FiMenu size={24} />
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 rounded-md border bg-gray-100 dark:bg-gray-800 w-40 sm:w-64"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center space-x-4">
        <button onClick={() => setNotificationsOpen(!notificationsOpen)} className="relative">
          <FiBell size={20} />
          {notificationsOpen && (
            <div className="absolute right-0 top-8 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3">
              <p>🔔 New user registered</p>
              <p>📦 New order placed</p>
            </div>
          )}
        </button>

        <button onClick={toggleDarkMode}>
          <FiSun className="dark:hidden" />
          <FiMoon className="hidden dark:block" />
        </button>
      </div>
    </nav>
  );
}