import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  extendRecurringDate,
  resetRecurringIntervalStatus,
  getBillings,
} from '../store/Billings.js';
import { toast } from 'react-toastify';
export default function ConfirmationModal({
  userIdentifer,
  closeModal,
  billId,
}) {
  const extendStatus = useSelector(
    (state) => state.Billings.recurringIntervalStatus
  );
  const dispatch = useDispatch();

  const [sort, setSort] = useState([
    { field: 'amount', order: null },
    { field: 'date', order: null },
    { field: 'isRecurring', order: null },
    { field: 'recurrenceInterval', order: null },
  ]);

  const confirmationHandler = async () => {
    await dispatch(
      extendRecurringDate({
        userIdentifer: userIdentifer,
        id: billId,
      })
    );

    dispatch(
      getBillings({
        userIdentifer: userIdentifer,
        sort: sort,
      })
    );

    toast.success('Extended!');
    closeModal();
    dispatch(resetRecurringIntervalStatus());
  };
  return (
    <div
      id="deleteModal"
      aria-hidden="true"
      className="flex flex-col w-full h-full">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <button
          onClick={closeModal}
          type="button"
          className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <p className="mb-4 mt-[25px] text-black-500 dark:text-black-300">
          Are you sure you want to mark it off as complete?
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={closeModal}
            data-modal-toggle="deleteModal"
            type="button"
            className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            No, cancel
          </button>
          <button
            onClick={confirmationHandler}
            type="submit"
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  );
}
