import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getBudgetAmount, setBudgetAmount } from '../store/Budgets.js';

export default function BudgetModal({ uid, closeModal }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Budgets.getBudget);
  console.log(data);
  const [budget, setBudget] = useState(0);

  const budgetHandler = (event) => {
    setBudget(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    dispatch(
      setBudgetAmount({
        userIdentifer: uid,
        amount: budget,
        budgetInterval: selectedDate,
      })
    );
    toast.success('Successfully Added!');
    closeModal();
  };

  useEffect(() => {
    dispatch(getBudgetAmount({ userIdentifer: uid }));
  }, [dispatch, uid]);

  useEffect(() => {
    if (data === null) {
      setBudget(0);
    } else {
      setBudget(data.amount);
      setSelectedDate(data.budgetInterval);
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
            <label
              className="mt-5 mb-5 text-center text-xl"
              htmlFor="datePicker">
              Select an Amount
            </label>
            <input
              type="number"
              className="mx-auto mb-5 text-center block py-2.5 px-0 w-[300px] text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              id="budgetAmount"
              placeholder="Enter your monthly budget"
              value={budget}
              onChange={budgetHandler}
              min="0"
            />
            <label
              className="mt-5 mb-5 mx-auto text-center text-xl"
              htmlFor="datePicker">
              Select a Date:
            </label>
            <select
              id="countries"
              className="bg-transparent  mt-5 mb-5 border mx-auto text-black border-gray-300 w-[300px] text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={handleDateChange}
              value={selectedDate}>
              <option disabled selected>
                Select a Timeframe
              </option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">BiWeekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly"> Quarterly</option>
              <option value="yearly">Yearly</option>
            </select>
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
