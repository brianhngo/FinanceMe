import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import 'chart.piecelabel.js';

const PieChart = ({ chartData }) => {
  return (
    <>
      <Pie
        type="pieWithLabel"
        data={chartData}
        options={{
          plugins: {
            legend: {
              labels: {
                color: 'white',
                font: {
                  size: 18,
                },
              },
            },
            datalabels: {
              color: 'white',
              font: {
                size: 12,
              },
            },
          },

          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default PieChart;
