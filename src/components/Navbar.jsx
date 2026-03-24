import { FiBell, FiSun, FiMoon } from "react-icons/fi";
import { useState } from "react";

export default function Navbar({ toggleDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow relative">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-2 rounded-md border bg-gray-100 dark:bg-gray-800"
      />

      <div className="flex items-center space-x-4 relative">
        <button onClick={() => setOpen(!open)}>
          <FiBell className="w-6 h-6" />
        </button>

     {open && (
  <div className="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
    <p className="text-sm text-gray-900 dark:text-gray-100">🔔 New user registered</p>
    <p className="text-sm text-gray-900 dark:text-gray-100">📦 New order placed</p>
  </div>
)}

        <button onClick={toggleDarkMode}>
          <FiSun className="dark:hidden" />
          <FiMoon className="hidden dark:block" />
        </button>
      </div>
    </nav>
  );
}