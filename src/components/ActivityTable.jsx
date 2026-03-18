// ActivityTable.jsx
export default function ActivityTable({ activities }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold mb-4">Recent Activity</h3>

      <table className="w-full text-left border-collapse">
  <thead>
    <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
      <th className="py-2 px-4">User</th>
      <th className="py-2 px-4">Action</th>
      <th className="py-2 px-4">Date</th>
    </tr>
  </thead>
  <tbody>
    {activities?.map((item) => (
      <tr
        key={item.id}
        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      >
        <td className="py-2 px-4">{item.user}</td>
        <td className="py-2 px-4">{item.action}</td>
        <td className="py-2 px-4">{item.date}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}