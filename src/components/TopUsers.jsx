export default function TopUsers({ users }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-4">Top Users</h3>

      {users.map((user, index) => (
        <div key={index} className="flex justify-between py-2 border-b last:border-none">
          <span className="text-gray-700 dark:text-gray-300">{user.name}</span>
          <span className="font-bold text-gray-900 dark:text-gray-100">{user.sales}</span>
        </div>
      ))}
    </div>
  );
}