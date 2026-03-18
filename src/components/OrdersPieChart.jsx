import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function OrdersPieChart({ data }) {
  const chartData = {
    labels: ["Pending", "Processing", "Completed"],
    datasets: [
      {
        label: "Orders Status",
        data: data,
        backgroundColor: ["#F59E0B", "#3B82F6", "#10B981"],
        borderColor: ["#FBBF24", "#60A5FA", "#34D399"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow mt-6">
      <h3 className="text-gray-900 dark:text-gray-100 font-bold mb-2">Orders Status</h3>
      <Pie data={chartData} />
    </div>
  );
}