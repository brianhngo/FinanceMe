import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { totalExpensesComparison } from '../store/Transactions.js';
import LineChart from './Charts/LineChart.js';
export default function TestContent({ userIdentifer }) {
  const data = useSelector(
    (state) => state.Transactions.totalExpensesComparison
  );

  const dispatch = useDispatch();
  const [timeframe, setTimeframe] = useState(null);
  const timeFrameHandler = (event) => {
    setTimeframe(event.target.value);
  };

  useEffect(() => {
    if (timeframe !== null) {
      dispatch(
        totalExpensesComparison({
          userIdentifer: userIdentifer,
          timeframe: timeframe,
        })
      );
    }
  }, [timeframe, dispatch]);

  return (
    <section className="ml-5 mr-5 mt-5 mb-5 w-90 h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-2 mb-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Total Spending Trends: Month-by-Month Comparison
        </h5>
        <div className="relative z-0 w-full mb-5 group">
          {timeframe === null ? (
            <label
              htmlFor="countries"
              className="block mb-2 text-lg text-center font-medium text-white">
              Please Select a Timeline You would want to see
            </label>
          ) : (
            <label className="block mb-2 text-lg text-center font-medium text-white">
              {timeframe === 'alltime'
                ? 'All Time'
                : `Last ${parseInt(timeframe) + 1} months to Present`}
            </label>
          )}
          <select
            id="countries"
            className="bg-transparent mb-5 border mx-auto text-white border-gray-300 w-[300px] text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={timeFrameHandler}>
            <option disabled selected>
              Select a Timeframe
            </option>
            <option value="2">Last 3 months</option>
            <option value="5">Last 6 months</option>
            <option value="11">Last 1 year</option>
            <option value="23">Last 2 years</option>
            <option value="alltime">All time</option>
          </select>
        </div>
        <div className="w-full h-[70%]">
          {data !== null ? (
            <>
              <LineChart chartData={data} />
            </>
          ) : null}
        </div>
      </a>
    </section>
  );
}
