import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import RevenueLineChart from "../components/RevenueLineChart";
import UsersBarChart from "../components/UsersBarChart";
import OrdersPieChart from "../components/OrdersPieChart";
import ActivityTable from "../components/ActivityTable";
import TopUsers from "../components/TopUsers";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [ordersData, setOrdersData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  // Initialize static data
  useEffect(() => {
    setActivities([
      { id: 1, user: "John", action: "Created account", date: "2026-03-01" },
      { id: 2, user: "Jane", action: "Placed order", date: "2026-03-02" },
      { id: 3, user: "David", action: "Updated profile", date: "2026-03-03" },
    ]);

    setTopUsers([
      { name: "John", sales: "$1,200" },
      { name: "Jane", sales: "$980" },
      { name: "David", sales: "$870" },
    ]);
  }, []);

  // Simulate live updating data
  useEffect(() => {
    const interval = setInterval(() => {
      // Update stats
      setStats([
        { id: 1, label: "Revenue", value: `$${Math.floor(Math.random() * 50000)}`, icon: "FiDollarSign" },
        { id: 2, label: "Users", value: Math.floor(Math.random() * 5000).toString(), icon: "FiUser" },
        { id: 3, label: "Orders", value: Math.floor(Math.random() * 1000), icon: "FiPackage" },
      ]);

      // Update revenue chart
      setRevenueData(Array.from({ length: 5 }, () => Math.floor(Math.random() * 30000)));

      // Update orders pie chart
      setOrdersData(Array.from({ length: 3 }, () => Math.floor(Math.random() * 50)));

      // Update users bar chart
      setUsersData(Array.from({ length: 7 }, () => Math.floor(Math.random() * 50)));
    }, 5000); // update every 5 seconds

    

    return () => clearInterval(interval);
  }, []);

  // Filter activities for search
  const filteredActivities = activities.filter(
    (a) =>
      a.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.action.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-y-auto">
          <Navbar
            toggleDarkMode={() => setDarkMode(!darkMode)}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <main className="p-6 space-y-6">
            {/* Stats Cards */}
            <StatsCards stats={stats} />

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RevenueLineChart data={revenueData} />
              <UsersBarChart data={usersData} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OrdersPieChart data={ordersData} />
              <TopUsers users={topUsers} />
            </div>

            {/* Activity Table */}
            <ActivityTable activities={filteredActivities} />
          </main>
        </div>
      </div>
    </div>
  );
}