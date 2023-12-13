import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export default function PieChart({ chartData }) {
  console.log('chartData', chartData);
  return (
    <>
      <Pie
        data={chartData}
        // options={{
        //   legend: {
        //     display: true,
        //     position: 'right',
        //   },
        //   maintainAspectRatio: false,
        // }}
      />
    </>
  );
}
