import React, { useState, useEffect } from 'react';
import { categoryComparison } from '../store/Transactions.js';
import { useDispatch, useSelector } from 'react-redux';
import BarChart from './Charts/BarChart.js';

export default function MonthlyTrends({ userIdentifer }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Transactions.categoryComparison);

  const [category, setCategory] = useState(null);
  const [timeframe, setTimeframe] = useState(null);

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  // Bar Graph
  const timeFrameHandler = (event) => {
    setTimeframe(event.target.value);
  };

  useEffect(() => {
    if (category !== null && timeframe !== null) {
      dispatch(
        categoryComparison({
          userIdentifer: userIdentifer,
          category: category,
          timeframe: timeframe,
        })
      );
    }
  }, [category, timeframe, dispatch]);

  return (
    <section className="md:ml-10 md:mr-10   mr-1 ml-1 mt- mb-5 md:mt-5 md:mb-5 w-[400px]  h-full md:w-[90%] mx-auto md:h-full">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-2 mb-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Category Trends: Monthly Spending Analysis
        </h5>
        <div className="relative z-0 w-full mb-5 group">
          {timeframe === null || category === null ? (
            <label
              htmlFor="countries"
              className="block mb-2 text-lg text-center font-medium text-white">
              Please Select a Timeline You would want to see
            </label>
          ) : (
            <label className="block mb-2 text-lg text-center font-medium text-white">
              {timeframe === 'alltime'
                ? `All Time Month by Month Expenses for ${category}`
                : `Last ${
                    parseInt(timeframe) + 1
                  } months to Present for ${category}`}
            </label>
          )}
          <div
            className="flex flex-col"
            onClick={(e) => {
              e.preventDefault();
            }}>
            <select
              id="countries"
              className="bg-transparent mb-5 border mx-auto border-gray-300 text-white w-[300px] text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={categoryHandler}>
              <option disabled selected>
                Choose a category
              </option>
              <option value="Loans">Loans</option>
              <option value="Utilities">Utilities</option>
              <option value="Clothing">Clothing</option>
              <option value="Rent">Rent</option>
              <option value="Groceries">Groceries</option>
              <option value="Transportation">Transportation</option>
              <option value="Health">Health</option>
              <option value="Gas">Gas</option>
              <option value="Savings">Savings</option>
              <option value="Activities">Activities</option>
              <option value="Other">Other</option>
            </select>
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
          <div
            className="h-full"
            onClick={(e) => {
              e.preventDefault();
            }}>
            {data !== null ? (
              <div className="h-[300px] p-2">
                <BarChart chartData={data} />
              </div>
            ) : null}
          </div>
        </div>
      </a>
    </section>
  );
}
