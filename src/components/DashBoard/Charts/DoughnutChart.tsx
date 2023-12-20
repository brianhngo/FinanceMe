import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart({ chartData }) {
  const textCenter = {
    id: 'textCenter',
    afterDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = 'bolder 30px sans-serif';
      ctx.fillStyle = 'red';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        `Value: ${data.datasets[0].data}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <>
      <Doughnut
        type="DoughnutWithLabel"
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
        plugins={[textCenter]}
      />
    </>
  );
}
