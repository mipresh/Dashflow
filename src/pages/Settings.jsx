import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-500">Manage your account preferences</p>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* PROFILE SETTINGS */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 space-y-4">
            <h2 className="font-semibold text-lg">Profile</h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-80">
              Save Changes
            </button>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 space-y-4">
            <h2 className="font-semibold text-lg">Security</h2>

            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button className="bg-red-600 text-white px-4 py-2 rounded-xl hover:opacity-80">
              Update Password
            </button>
          </div>
        </div>

        {/* PREFERENCES */}
        <div className="bg-white rounded-2xl shadow p-6 border border-gray-100">
          <h2 className="font-semibold text-lg mb-4">Preferences</h2>

          <div className="flex items-center justify-between py-2">
            <span>Dark Mode</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Email Notifications</span>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>

          <div className="flex items-center justify-between py-2">
            <span>Push Notifications</span>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Layout>
  );
}