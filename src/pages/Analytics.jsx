import Layout from "../components/Layout";

export default function Analytics() {
  const stats = [
    { label: "Total Users", value: "1,245" },
    { label: "Active Users", value: "532" },
    { label: "Revenue", value: "$8,430" },
    { label: "New Signups", value: "128" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-gray-500">Overview of platform performance</p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-4 border border-gray-100"
            >
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h2 className="text-xl font-bold mt-1">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* CHART PLACEHOLDERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 h-64">
            <h3 className="font-semibold mb-2">User Growth</h3>
            <p className="text-gray-400 text-sm">Charts</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 h-64">
            <h3 className="font-semibold mb-2">Revenue Overview</h3>
            <p className="text-gray-400 text-sm">Charts</p>
          </div>
        </div>

        {/* ACTIVITY SECTION */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h3 className="font-semibold mb-4">Recent Activity</h3>

          <ul className="space-y-3 text-sm">
            <li className="text-gray-600">✔ New user registered - 2 mins ago</li>
            <li className="text-gray-600">✔ Payment received - $120</li>
            <li className="text-gray-600">✔ New subscription plan activated</li>
            <li className="text-gray-600">✔ User upgraded to Pro plan</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}