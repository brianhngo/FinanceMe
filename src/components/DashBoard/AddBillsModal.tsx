import React, { useState } from 'react';
import { addBillings, getBillings } from '../store/Billings.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function AddBillsModal({ userIdentifer, closeModal }) {
  const billingStatus = useSelector((state) => state.Billings.addBilling);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('');
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const [description, setDescription] = useState('');
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const [isRecurring, setIsRecurring] = useState(false);

  const isRecurringHandler = (event) => {
    setIsRecurring(!isRecurring);
  };

  const [isRecurringInterval, setIsRecurringInterval] = useState('');
  const isRecurringIntervalHandler = (event) => {
    setIsRecurringInterval(event.target.value);
  };

  const [transactionDate, setTransactionDate] = useState('');

  const transactionDateHandler = (event) => {
    setTransactionDate(event.target.value);
  };

  const buttonHandler = async (event) => {
    try {
      event.preventDefault();
      await dispatch(
        addBillings({
          amount: amount,
          status: true,
          description: description,
          isRecurring: isRecurring,
          isRecurringInterval:
            isRecurring === true ? isRecurringInterval : null,
          date: transactionDate,
          userIdentifer: userIdentifer,
        })
      );

      await dispatch(
        getBillings({
          userIdentifer: userIdentifer,
        })
      );
      if (billingStatus) {
        toast.success('Added!');
        closeModal();
      } else {
        toast.error('Error');
        closeModal();
      }
    } catch (error) {
      console.error(error);
    }
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
        <h1 className="text-center text-3xl mt-5 mb-5 "> Add Transaction </h1>
        <form className="max-w-md mx-auto">
          {/* Amount */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={amount}
              required
              onChange={amountHandler}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Amount
            </label>
          </div>

          {/* Description */}

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={description}
              required
              onChange={descriptionHandler}
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>

          {/* Is Recurring */}
          <div className="relative z-0 w-full mb-5 group flex flex-col">
            <label
              htmlFor="default-checkbox"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-500">
              Is Recurring
            </label>
            <input
              id="default-checkbox"
              type="checkbox"
              checked={isRecurring}
              onChange={isRecurringHandler}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          {isRecurring === true ? (
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="countries"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-500">
                Select a Recurring Interval
              </label>
              <select
                id="countries"
                className="bg-transparent mb-5 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={isRecurringInterval}
                onChange={isRecurringIntervalHandler}>
                <option disabled selected>
                  Choose a recurrence Interval
                </option>
                <option value="weekly">weekly</option>
                <option value="biweekly">biweekly</option>
                <option value="monthly">monthly</option>
                <option value="quarterly">quarterly</option>
                <option value="yearly">yearly</option>
              </select>
            </div>
          ) : null}

          {/* date */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="transaction_date"
              id="floating_transaction_date"
              className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={transactionDate}
              required
              onChange={transactionDateHandler}
            />
            <label
              htmlFor="floating_transaction_date"
              className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Transaction Date
            </label>
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
