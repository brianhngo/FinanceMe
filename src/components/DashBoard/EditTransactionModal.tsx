import React, { useState, useEffect } from 'react';
import {
  getTransaction,
  updateTransaction,
  getTransactionList,
  deleteTransaction,
} from '../store/Transactions.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import DeleteTransactionModal from './DeleteTransactionModal.js';

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

export default function EditTransactionModal({
  uid,
  transactionId,
  closeModal,
}) {
  const transactionInfo = useSelector(
    (state) => state.Transactions.transactionInfo
  );

  const transactionUpdateStatus = useSelector(
    (state) => state.Transactions.updateStatus
  );

  const dispatch = useDispatch();
  const [category, setCategory] = useState('');

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const transactionDateHandler = (event) => {
    setTransactionDate(event.target.value);
  };

  const buttonHandler = async (event) => {
    event.preventDefault();
    await dispatch(
      updateTransaction({
        transactionId: transactionId,
        userIdentifer: uid,
        category: category,
        description: description,
        amount: amount,
        date: transactionDate,
      })
    );

    await dispatch(
      getTransactionList({
        uid: uid,
        page: 1,
      })
    );
    if (transactionUpdateStatus) {
      toast.success('Updated!');

      closeModal();
    } else {
      toast.error('Error');
      closeModal();
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

  const deleteTransactionHandler = async (event) => {
    try {
      event.preventDefault();
      await dispatch(
        deleteTransaction({
          transactionId: transactionId,
          userIdentifer: uid,
        })
      );

      setDeleteModal(false);
      await dispatch(
        getTransactionList({
          uid: uid,
          page: 1,
        })
      );
      toast.success('Deleted!');

      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(
          getTransaction({
            userIdentifer: uid,
            transactionId: transactionId,
          })
        );

        // Now that dispatch is complete, update the local state
        setCategory(transactionInfo[0].category || '');
        setDescription(transactionInfo[0].description || '');
        setAmount(transactionInfo[0].amount || '');
        setTransactionDate(transactionInfo[0].date || '');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [transactionId]);

  useEffect(() => {
    // Update local state when transactionInfo changes
    if (transactionInfo.length > 0) {
      setCategory(transactionInfo[0].category || '');
      setDescription(transactionInfo[0].description || '');
      setAmount(transactionInfo[0].amount || '');
      setTransactionDate(transactionInfo[0].date || '');
    }
  }, [transactionInfo]);

  console.log(transactionDate);
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
            <h1 className="text-center text-3xl mt-5 mb-5 ">
              {' '}
              Edit Transaction{' '}
            </h1>
            <form className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_category"
                  id="floating_category"
                  className="block py-2.5 px-0 w-full text-xl text-black-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={category}
                  onChange={categoryHandler}
                  required
                />
                <label
                  htmlFor="floating_category"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Category
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_description"
                  id="floating_description"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={description}
                  required
                  onChange={descriptionHandler}
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Description
                </label>
              </div>
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
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  name="transaction_date"
                  id="floating_transaction_date"
                  className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black-100 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  value={
                    transactionDate
                      ? new Date(transactionDate).toISOString().split('T')[0]
                      : ''
                  }
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
              <button
                type="submit"
                onClick={openDeleteModal}
                className="block mt-5 text-white bg-red-700 mx-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
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
