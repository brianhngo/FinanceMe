import React, { useState, useEffect } from 'react';
import { getTransactionList } from '../store/Transactions.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
export default function Transactions({ uid }) {
  const transactionList = useSelector(
    (state) => state.Transactions.transactions
  );
  const dispatch = useDispatch();
  // Keeping track of what page we are on
  const [page, setPage] = useState(1);

  // Modal Status for Adding New Transaction
  const [newTransactionModal, setNewTransactionModal] = useState(true);

  // Modal Status for Editing Transactions
  const [editTransactionModal, setEditTransactionModal] = useState(true);

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
    <section className="ml-5 mr-5 mt-5 mb-5 w-[90%] h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-5 mb-5 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Recent Transactions
        </h5>
        <div className=" pr-5 pb-5 flex justify-end align-middle">
          <button className="w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
            Add Transaction
          </button>
        </div>
        <div className="relative w-full h-[70%] overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[90%] h-[50%] m-3 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-center">
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
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {transaction.id}
                          </th>
                          <td className="px-6 py-4">
                            {transaction.description}
                          </td>
                          <td className="px-6 py-4">{transaction.category}</td>
                          <td className="px-6 py-4">{transaction.amount}</td>
                          <td className="px-6 py-4">
                            {transaction.updatedAt.slice(0, 10)}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                              Edit
                            </a>
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
            <p className="text-xl mt-auto text-white text-center">
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
              className="flex items-center justify-center first-line:w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
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
              className=" flex items-center justify-center first-line:w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
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
