import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart({ chartData }) {
  if (!chartData) {
    // Return a loading indicator or placeholder if chartData is not available
    return;
  }

  return (
    <>
      <Doughnut
        data={chartData ? chartData : null}
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
}
