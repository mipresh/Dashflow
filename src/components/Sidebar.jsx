import { FiHome, FiBarChart2, FiUsers, FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 p-4">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer">
          <FiHome /> <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer">
          <FiBarChart2 /> <span>Analytics</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer">
          <FiUsers /> <span>Users</span>
        </li>
        <li className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 cursor-pointer">
          <FiSettings /> <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
}