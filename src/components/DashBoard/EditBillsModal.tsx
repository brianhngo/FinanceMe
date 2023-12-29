import React, { useState, useEffect } from 'react';
import {
  addBillings,
  getBillings,
  editBillings,
  getSingularBillings,
} from '../store/Billings.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const customStyles3 = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
  },
};

export default function EditBillsModal({ userIdentifer, billId, closeModal }) {
  const billingInfo = useSelector(
    (state) => state.Billings.getSingularListData
  );

  const billingStatus = useSelector((state) => state.Billings.editBillings);

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
        editBillings({
          amount: amount,
          status: true,
          description: description,
          isRecurring: isRecurring,
          isRecurringInterval:
            isRecurring === true ? isRecurringInterval : null,
          date: transactionDate,
          userIdentifer: userIdentifer,
          id: billId,
        })
      );

      dispatch(
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

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = (event) => {
    event.preventDefault();
    setDeleteModal(true);
  };

  const closeDeleteModal = (event) => {
    event.preventDefault();
    setDeleteModal(false);
  };

  //   const deleteTransactionHandler = async (event) => {
  //     try {
  //       event.preventDefault();
  //       await dispatch(
  //         deleteTransaction({
  //           transactionId: transactionId,
  //           userIdentifer: uid,
  //         })
  //       );

  //       setDeleteModal(false);
  //       await dispatch(
  //         getTransactionList({
  //           uid: uid,
  //           page: 1,
  //         })
  //       );
  //       toast.success('Deleted!');

  //       closeModal();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          getSingularBillings({
            userIdentifer: userIdentifer,
            billId: billId,
          })
        );

        if (billingInfo && billingInfo.length > 0) {
          setAmount(billingInfo[0].amount || '');
          setDescription(billingInfo[0].description || '');
          setIsRecurring(
            billingInfo[0].isRecurring === false ? false : true || ''
          );
          setIsRecurringInterval(billingInfo[0].isRecurringInterval || '');
          setTransactionDate(billingInfo[0].date.slice(0, 10) || '');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [billId]);

  useEffect(() => {
    // Update local state when transactionInfo changes
    if (billingInfo.length > 0) {
      setAmount(billingInfo[0].amount || '');
      setDescription(billingInfo[0].description || '');
      setIsRecurring(billingInfo[0].isRecurring === false ? false : true || '');
      setIsRecurringInterval(billingInfo[0].isRecurringInterval || '');
      setTransactionDate(billingInfo[0].date.slice(0, 10) || '');
    }
  }, [billingInfo]);

  return (
    <>
      {deleteModal === false ? (
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
            <h1 className="text-center text-3xl mt-5 mb-5 "> Edit Bill </h1>
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
      ) : (
        <div
          id="deleteModal"
          aria-hidden="true"
          className="flex flex-col w-full h-full">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <button
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
            <svg
              className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <p className="mb-4 text-black-500 dark:text-black-300">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={closeDeleteModal}
                data-modal-toggle="deleteModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                No, cancel
              </button>
              <button
                onClick={deleteTransactionHandler}
                type="submit"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
