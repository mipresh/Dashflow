import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RevenueLineChart({ data }) {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: data,
        fill: false,
        borderColor: "#3B82F6",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow mt-6">
      <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-2">Revenue</h3>
      <Line data={chartData} />
    </div>
  );
}