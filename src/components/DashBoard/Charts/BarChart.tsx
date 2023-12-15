import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.piecelabel.js';

const BarChart = ({ chartData }) => {
  console.log('chartData', chartData);
  return (
    <>
      <Bar
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

export default BarChart;
