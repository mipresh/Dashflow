import { FiBell, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar({ toggleDarkMode }) {
  const [open, setOpen] = useState(false); // notifications
  const [mobileMenu, setMobileMenu] = useState(false); // mobile menu

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 relative">
      <div className="flex items-center justify-between">
        {/* Left: Logo + Search */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold"></h1>

          {/* Search bar (desktop only) */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md border bg-gray-100 dark:bg-gray-800 hidden sm:block"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop actions */}
          <div className="hidden sm:flex items-center space-x-4 relative">
            <button onClick={() => setOpen(!open)}>
              <FiBell className="w-6 h-6" />
            </button>

            {open && (
              <div className="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  🔔 New user registered
                </p>
                <p className="text-sm text-gray-900 dark:text-gray-100">
                  📦 New order placed
                </p>
              </div>
            )}

            <button onClick={toggleDarkMode}>
              <FiSun className="dark:hidden" />
              <FiMoon className="hidden dark:block" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="sm:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 bg-white dark:bg-gray-900 p-4 rounded shadow">
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-md border bg-gray-100 dark:bg-gray-800"
          />
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="flex items-center space-x-2">
            <FiSun className="dark:hidden" />
            <FiMoon className="hidden dark:block" />
            <span>Dark Mode</span>
          </button>
          {/* Notifications */}
          <button onClick={() => setOpen(!open)} className="flex items-center space-x-2">
            <FiBell />
            <span>Notifications</span>
          </button>

          {/* Example navigation links */}
          <a href="#" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Analytics</a>
          <a href="#" className="hover:underline">Settings</a>
        </div>
      )}
    </nav>
  );
}