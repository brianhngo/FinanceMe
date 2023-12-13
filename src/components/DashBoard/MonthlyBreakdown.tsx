import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyExpenses } from '../store/Transactions.js';

const fakeData = {
  labels: ['Label 1', 'Label 2'],
  datasets: [
    {
      label: 'Test',
      data: [32, 31],
      backgroundColor: ['red', 'blue'], // Specify colors for each segment
    },
  ],
};

export default function MonthlyBreakdown({ uid }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Transactions.monthlyTransactions);
  console.log('data', data);

  useEffect(() => {
    dispatch(
      getMonthlyExpenses({
        userIdentifer: uid,
      })
    );
  }, [uid]);

  return (
    <section className="ml-5 mr-5 mt-5 mb-5 w-90 h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Monthly Breakdown
        </h5>
        {data !== null ? <PieChart chartData={data} /> : <div> Hi </div>}
      </a>
    </section>
  );
}
