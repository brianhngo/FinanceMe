import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  console.log('hi');
  return (
    <>
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
    </>
  );
};

export default BarChart;
