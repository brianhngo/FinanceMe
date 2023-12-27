import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyExpenses } from '../store/Transactions.js';

const emptyData = {
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [],
    },
  ],
};

export default function MonthlyBreakdown({ uid }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Transactions.monthlyTransactions);

  const sum = data?.datasets[0]?.data.reduce(
    (acc, currentValue) => acc + (isNaN(currentValue) ? 0 : currentValue),
    0
  );
  const datas = data?.datasets[0].data;
  const labels = data?.labels;
  const color = data?.datasets[0].backgroundColor;

  useEffect(() => {
    dispatch(
      getMonthlyExpenses({
        userIdentifer: uid,
      })
    );
  }, [uid]);

  return (
    <section className="ml-10 mr-5 mt-5 mb-5 w-[90%] mx-auto h-[100%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-white dark:text-white">
          Monthly Expenses Breakdown
        </h5>
        <div className="w-full h-[40%] ">
          {data !== null ? (
            <>
              <PieChart chartData={data} />
            </>
          ) : (
            <PieChart chartData={emptyData} />
          )}
          <div className="h-[30%]">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white dark:text-white">
              Monthly Breakdown Expenses
            </h5>
            <p className="mb-2 text-lg text-center font-bold tracking-tight text-white dark:text-white">
              {' '}
              These statistics cannot be removed by clicking on Chart's label
            </p>
            <table className="w-[90%]  m-3 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Total Amount ($)
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Percentage (%)
                  </th>
                </tr>
              </thead>
              <tbody className="overflow-y-auto max-h-[200px]">
                {!sum
                  ? null
                  : datas?.map((entry, idx) => {
                      return (
                        <>
                          <tr
                            key={idx}
                            className="bg-white border-b mx-auto text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-center mx-auto text-gray-900 whitespace-nowrap dark:text-white">
                              {labels[idx]}
                            </th>
                            <td className="px-6 mx-auto text-center py-4">
                              {color[idx]}
                            </td>
                            <td className="px-6 mx-auto text-center py-4">
                              {entry}
                            </td>

                            <td className="px-6 mx-auto text-center py-4">
                              {Math.round((entry / sum) * 100)}
                            </td>
                          </tr>
                        </>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </a>
    </section>
  );
}
