import React, { useState, useEffect } from 'react';
import { getTransactionList } from '../store/Transactions.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import AddTransactionModal from './AddTransactionModal.js';
import EditTransactionLink from './EditTransactionLink.js';
import '../../App.css';

const customStyles = {
  content: {
    zIndex: 1,
    top: '30%',
    left: '35%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Transactions({ uid }) {
  const transactionList = useSelector(
    (state) => state.Transactions.transactions
  );
  const dispatch = useDispatch();
  // Keeping track of what page we are on
  const [page, setPage] = useState(1);

  // Modal Status for Adding New Transaction
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  // Open/close Transaction Modal
  const openTransactionModal = (event) => {
    setNewTransactionModal(true);
  };

  const closeTransactionModal = () => {
    setNewTransactionModal(false);
  };

  const increasePageHandler = async (event) => {
    try {
      if (page * 10 > transactionList.count) {
        return;
      }

      event.preventDefault();
      setPage((prevPage) => {
        const newPage = prevPage + 1;

        dispatch(
          getTransactionList({
            uid: uid,
            page: newPage,
          })
        );
        return newPage;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const decreasePageHandler = async (event) => {
    try {
      if (page === 1) {
        return;
      }
      event.preventDefault();
      setPage((prevPage) => {
        const newPage = prevPage - 1;

        dispatch(
          getTransactionList({
            uid: uid,
            page: newPage,
          })
        );
        return newPage;
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (uid) {
      dispatch(
        getTransactionList({
          uid: uid,
          page: page,
        })
      );
    }
  }, [uid]);

  return (
    <section className="md:ml-10 md:mr-10   mr-1 ml-1 mt-3 mb-5 md:mt-5 md:mb-5 w-[400px] h-full md:w-[90%] mx-auto md:h-full">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-5 mb-5 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Recent Transactions
        </h5>
        <div className=" pr-5 pb-5 flex justify-end align-middle">
          {/* Add Transaction Modal  */}

          <Modal
            isOpen={newTransactionModal}
            onRequestClose={closeTransactionModal}
            style={customStyles}>
            <AddTransactionModal uid={uid} closeModal={closeTransactionModal} />
          </Modal>

          <button
            onClick={openTransactionModal}
            className="md:w-140 md:h-50 w-30 h-25 font-sans  p-1 md:p-3 text-base uppercase tracking-wider text-6 md:text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
            Add Transaction
          </button>
        </div>
        <div className="relative w-full h-[65%] overflow-x-auto  sm:rounded-lg">
          <table className="md:w-[90%] h-[15%] w-[15%]  mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr className="border border-gray-500">
                <th scope="col" className="px-6 py-3">
                  <div className="flex text-center justify-center  items-center">
                    Description
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-1 md:px-6 md:py-3 text-center mx-auto">
                  <div className="flex text-center justify-center items-center mx-auto">
                    Category
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center  items-center">
                    Price ($)
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center  justify-center items-center">
                    Date
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-1 md:px-6 md:py-3 text-center">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {!transactionList.rows
                ? null
                : transactionList.rows.map((transaction, idx) => {
                    return (
                      <>
                        <tr
                          key={idx}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-1 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {transaction.description}
                          </td>
                          <td className="px-1 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {transaction.category}
                          </td>
                          <td className="px-1 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {transaction.amount}
                          </td>
                          <td className="px-1 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {transaction.date.slice(0, 10)}
                          </td>
                          <td className="px-1 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            <EditTransactionLink
                              uid={uid}
                              transactionId={transaction.id}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-around">
          {/* Pagination Buttons  */}
          <div className="flex mt-5 justify-center align-middle">
            <p className="text-md md:text-2xl mt-auto text-white text-center">
              {' '}
              {transactionList.count < 10
                ? `Showing 1 to ${transactionList.count} of ${transactionList.count} results`
                : `Showing ${(page - 1) * 10 + 1} to ${Math.min(
                    page * 10,
                    transactionList.count
                  )} of ${transactionList.count} results`}
            </p>
          </div>
          <div className="flex mt-5 gap-3">
            <a
              onClick={decreasePageHandler}
              href="#"
              className="flex items-center justify-center md:w-140 md:h-50 w-25 h-25 font-sans p-1 md:p-3 text-base uppercase tracking-wider text-6 md:text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </a>
            <a
              onClick={increasePageHandler}
              href="#"
              className=" flex items-center justify-center md:w-140 md:h-50 w-25 h-25 font-sans p-1 md:p-3 text-base uppercase tracking-wider text-6 md:text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </a>
    </section>
  );
}
