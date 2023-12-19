import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
  return (
    <>
      <Line
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
              beginAtZero: true, // Start the y-axis from zero
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
          elements: {
            point: {
              radius: 6, // Set the radius of the points to make them larger
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default LineChart;
