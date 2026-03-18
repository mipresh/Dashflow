import { FiDollarSign, FiUser, FiPackage } from "react-icons/fi";

export default function StatsCards({ stats }) {
  const icons = {
    FiDollarSign: <FiDollarSign className="text-2xl text-green-500" />,
    FiUser: <FiUser className="text-2xl text-blue-500" />,
    FiPackage: <FiPackage className="text-2xl text-purple-500" />,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow flex items-center space-x-4"
        >
          {icons[stat.icon]}
          <div>
            <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}