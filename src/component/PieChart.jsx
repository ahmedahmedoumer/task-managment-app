import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [
        {
          data: [30, 40, 30], 
          backgroundColor: ['red', 'blue', 'green'], 
        },
      ],
    };
  
    const options = {
    };
  
    return (
      <div className="doughnut-chart">
        <Doughnut  data={data} options={options} />
      </div>
    );
  };
  export default PieChart;