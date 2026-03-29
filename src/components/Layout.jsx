import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        
        {/* Sidebar */}
        <Sidebar 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Main */}
        <div className="flex-1 flex flex-col">
          
          {/* Navbar */}
          <Navbar
            toggleDarkMode={() => setDarkMode(!darkMode)}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Page Content */}
          <main className="p-4 sm:p-6">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}