import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  return (
    <div
      className="w-full h-[100%]"
      onClick={(e) => {
        e.preventDefault();
      }}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              color: 'white',
              font: {
                size: 16,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: 'white',
                font: {
                  size: 20,
                },
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },
            y: {
              ticks: {
                color: 'white',
                font: {
                  size: 20,
                },
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.5)',
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
