import Layout from "../components/Layout";

export default function Users() {
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { name: "Sarah Lee", email: "sarah@example.com", role: "User", status: "Active" },
    { name: "Mike Ross", email: "mike@example.com", role: "Editor", status: "Inactive" },
    { name: "Amina Yusuf", email: "amina@example.com", role: "User", status: "Active" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold">Users</h1>
            <p className="text-gray-500">Manage all registered users</p>
          </div>

          <button className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-80">
            + Add User
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full sm:w-1/2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <select className="px-4 py-2 border rounded-xl">
            <option>All Roles</option>
            <option>Admin</option>
            <option>User</option>
            <option>Editor</option>
          </select>

          <select className="px-4 py-2 border rounded-xl">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* USERS TABLE */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-600">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-4 space-x-2">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}