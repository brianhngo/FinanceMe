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
    <section className="md:ml-10 md:mr-10   mt-[10px] mb-[10px] md:mt-5 md:mb-5 w-[400px] h-full md:w-[90%] mx-auto md:h-full">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-4 mt-5 text-4xl text-center font-bold tracking-tight text-white dark:text-white">
          Monthly Expenses Breakdown
        </h5>
        <div
          className="w-full h-[40%] "
          onClick={(e) => {
            e.preventDefault();
          }}>
          {data !== null ? (
            <>
              <PieChart chartData={data} />
            </>
          ) : (
            <PieChart chartData={emptyData} />
          )}
          <div className="mx-auto w-full   md:h-[30%]">
            <h5 className="mb-3 mt-3 text-3xl text-center font-bold tracking-tight text-white dark:text-white">
              Monthly Breakdown Expenses
            </h5>
            <p className="mb-3 mt-3 text-xl text-center font-bold tracking-tight text-white dark:text-white">
              {' '}
              These statistics cannot be removed by clicking on Chart's label
            </p>
            <table className="md:w-[90%] h-[15%] w-[15%]  mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
              <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                <tr className=" border border-gray-500">
                  <th
                    scope="col"
                    className="px-3 py-1 md:px-6 md:py-3 text-center">
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1 md:px-6 md:py-3 text-center">
                    Color
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1 md:px-6 md:py-3 text-center">
                    Total Amount ($)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-1 md:px-6 md:py-3 text-center">
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
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className="bg-white border-b mx-auto text-center dark:bg-gray-800 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                              scope="row"
                              className="px-3 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                              {labels[idx]}
                            </th>
                            <td className="px-3 py-1 text-sm md:px-6 md:py-3 mx-auto md:text-lg text-center text-gray-200 ">
                              {color[idx]}
                            </td>
                            <td className="px-3 py-1 text-sm md:px-6 md:py-3 mx-auto md:text-lg text-center  text-gray-200 ">
                              {entry}
                            </td>

                            <td className="px-3 py-1 text-sm md:px-6 md:py-3 mx-auto md:text-lg text-center text-gray-200  ">
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
