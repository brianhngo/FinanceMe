import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SavingsModal({ uid, closeModal }) {
  const dispatch = useDispatch();

  const [budget, setBudget] = useState(0);

  const budgetHandler = (event) => {
    setBudget(event.target.value);
  };

  const [startDate, setStartDate] = useState(null);
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const [endDate, setEndDate] = useState(null);

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const buttonHandler = (event) => {
    event.preventDefault();

    toast.success('Successfully Added!');
    closeModal();
  };

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
          Set Your Savings Tracker{' '}
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
              <DatePicker
                className="mx-auto mb-1 text-center block py-2.5 px-0 w-[300px] text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                selected={startDate}
                onChange={handleStartDateChange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="mt-1 mb-1 mx-auto text-center text-2xl"
                htmlFor="datePicker">
                Select a End Date:
              </label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="yyyy-MM-dd"
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
