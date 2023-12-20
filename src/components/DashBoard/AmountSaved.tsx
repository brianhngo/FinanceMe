import React from 'react';
import DoughnutChart from './Charts/DoughnutChart';

const emptyData = {
  labels: ['Yes', 'No'],
  datasets: [
    {
      label: 'Poll',
      data: [3, 6],
      backgroundColor: ['black', 'red'],
    },
  ],
};
export default function AmountSaved({ userIdentifer }) {
  return (
    <section className="ml-5 mr-5 mt-5 mb-5 w-90 h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Amount Saved
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="w-[50%] h-[50%]">
          <DoughnutChart chartData={emptyData} />
        </div>
      </a>
    </section>
  );
}
