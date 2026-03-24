import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { FiMenu } from "react-icons/fi";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      {/* Full height wrapper */}
      <div className="min-h-screen flex flex-col">
        {/* Hamburger Navbar for mobile */}
        <div className="p-4 shadow flex items-center justify-between bg-gray-50 dark:bg-gray-900 md:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FiMenu size={24} />
          </button>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>

        {/* Page content */}
        <div className="flex-1 relative">
          {/* Optional overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          <Routes>
            {/* Pass sidebar state to Dashboard */}
            <Route
              path="/"
              element={<Dashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}