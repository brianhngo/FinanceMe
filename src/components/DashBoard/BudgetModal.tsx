import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  getBudgetAmount,
  setBudgetAmount,
  getBudgetChartData,
} from '../store/Budgets.js';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BudgetModal({ uid, closeModal }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Budgets.getBudget);
  const [budget, setBudget] = useState(0);

  const budgetHandler = (event) => {
    setBudget(event.target.value);
  };

  const [startDate, setStartDate] = useState();
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const [endDate, setEndDate] = useState();

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const buttonHandler = async (event) => {
    event.preventDefault();
    await dispatch(
      setBudgetAmount({
        userIdentifer: uid,
        status: true,
        amount: budget,
        date: startDate,
        endDate: endDate,
      })
    );
    await dispatch(
      getBudgetChartData({
        userIdentifer: uid,
      })
    );
    toast.success('Successfully Added!');
    closeModal();
  };

  useEffect(() => {
    dispatch(getBudgetAmount({ userIdentifer: uid }));
  }, [uid]);

  useEffect(() => {
    if (data === null) {
      setBudget(0);
      setEndDate(''); // Set to empty string instead of null
      setStartDate(''); // Set to empty string instead of null
    } else {
      setBudget(data.amount);

      // Ensure data.date and data.endDate are not null before slicing
      const startDate = data.date
        ? new Date(data.date).toISOString().slice(0, 10)
        : '';
      const endDate = data.endDate
        ? new Date(data.endDate).toISOString().slice(0, 10)
        : '';

      setStartDate(startDate);
      setEndDate(endDate);
    }
  }, [data]);

  return (
    <div className="flex flex-col w-[500px] h-[500px]">
      <button
        onClick={closeModal}
        type="button"
        className="text-gray-400 mb-5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-md w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="default-modal">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div>
        <h1 className="text-center text-4xl mt-5 mb-[10%] ">
          {' '}
          Set Your Budget Tracker{' '}
        </h1>
        <form className="max-w-md mt-5 mx-auto">
          <div className="relative mx-auto z-0 w-full mb-5 group">
            <div className="flex flex-col">
              <label
                className="mt-2 mb-1 text-center text-2xl"
                htmlFor="datePicker">
                Select an Amount
              </label>
              <input
                type="number"
                className="mx-auto mb-1 text-center block py-2.5 px-0 w-[300px] text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                id="budgetAmount"
                placeholder="Enter your monthly budget"
                value={budget}
                onChange={budgetHandler}
                min="0"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="mt-1 mb-1 mx-auto text-center text-2xl"
                htmlFor="datePicker">
                Select a Start Date:
              </label>
              <input
                type="date"
                required
                className="mx-auto mb-1 text-center block py-2.5 px-0 w-[300px] text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex flex-col">
              <label
                className="mt-1 mb-1 mx-auto text-center text-2xl"
                htmlFor="datePicker">
                Select a End Date:
              </label>
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
                required
                className="mx-auto mb-1 text-center block py-2.5 px-0 w-[300px] text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={buttonHandler}
            className="block text-white bg-blue-700 mx-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
