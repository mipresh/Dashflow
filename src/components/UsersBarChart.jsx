import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function UsersBarChart({ data }) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New Users",
        data: data,
        backgroundColor: "#10B981",
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow mt-6">
      <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-2">New Users (Weekly)</h3>
      <Bar data={chartData} />
    </div>
  );
}