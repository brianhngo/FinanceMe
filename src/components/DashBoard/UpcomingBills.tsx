import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBillings } from '../store/Billings.js';
import AddBillsModal from './AddBillsModal.js';
import Modal from 'react-modal';
import EditBillsLink from './EditBillsLink.js';
import { sortBillingList } from '../store/Billings.js';

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

export default function UpcomingBills({ userIdentifer }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Billings.getBillingsList);

  const [sort, setSort] = useState([
    { field: 'amount', order: null },
    { field: 'date', order: null },
    { field: 'isRecurring', order: null },
    { field: 'recurrenceInterval', order: null },
  ]);

  const handleSortChange = (clickedField) => {
    const newSort = [...sort];

    const clickedFieldIndex = newSort.findIndex(
      (s) => s.field === clickedField
    );

    // Toggle through 'null', 'ASC', 'DESC'
    if (newSort[clickedFieldIndex].order === null) {
      newSort[clickedFieldIndex].order = 'ASC';
    } else if (newSort[clickedFieldIndex].order === 'ASC') {
      newSort[clickedFieldIndex].order = 'DESC';
    } else {
      newSort[clickedFieldIndex].order = null;
    }

    // Set the updated sort state
    setSort(newSort);
  };

  const [addBillsModal, setAddBillsModal] = useState(false);

  const openAddBillsModal = () => {
    setAddBillsModal(true);
  };

  const closeAddBillsModal = () => {
    setAddBillsModal(false);
  };

  useEffect(() => {
    dispatch(
      getBillings({
        userIdentifer: userIdentifer,
        sort: sort,
      })
    );
  }, [userIdentifer]);

  return (
    <section className="md:ml-10 md:mr-10   mr-1 ml-1 mt- mb-5 md:mt-5 md:mb-5 w-[400px] h-full md:w-[90%] mx-auto md:h-full">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-5 mb-5 text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Upcoming Bills
        </h5>
        <div className=" pr-5 pb-5 flex justify-end align-middle">
          {/* Add Transaction Modal  */}
          <Modal
            isOpen={addBillsModal}
            onRequestClose={closeAddBillsModal}
            style={customStyles}>
            <AddBillsModal
              userIdentifer={userIdentifer}
              closeModal={closeAddBillsModal}
            />
          </Modal>

          <button
            onClick={openAddBillsModal}
            className="w-140 h-45 font-sans p-1 md:p-3 text-base uppercase tracking-wider text-8 md:text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
            Add a Bill
          </button>
        </div>
        <div className="relative w-full h-[60%] overflow-x-auto  sm:rounded-lg">
          <table className="w-[90%] h-[50%] m-3 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
              <tr className="border border-gray-500">
                <th
                  scope="col"
                  className="px-3 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center items-center">
                    Description
                  </div>
                </th>

                <th
                  scope="col"
                  className="px-2 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center items-center">
                    Amount ($)
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-2 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center items-center">
                    Due Date
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-2 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center items-center">
                    Is Recurring
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-2 py-1 md:px-6 md:py-3 text-center">
                  <div className="flex text-center justify-center items-center">
                    Recurring Interval
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-2 py-1 md:px-6 md:py-3 text-center">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {data
                ? data.map((row, index) => {
                    return (
                      <>
                        <tr
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {row.description}
                          </td>
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {row.amount}
                          </td>
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {row.date.slice(0, 10)}
                          </td>
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {row.isRecurring === true ? 'yes' : 'no'}
                          </td>
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            {row.recurrenceInterval}
                          </td>
                          <td className="px-2 py-1 text-sm md:px-6 md:py-3 font-medium text-center md:text-lg mx-auto text-gray-400 whitespace-nowrap dark:text-gray-200">
                            <EditBillsLink
                              sort={sort}
                              billId={row.id}
                              userIdentifer={userIdentifer}
                            />
                            <div></div>
                          </td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row justify-around">
          {/* Pagination Buttons  */}
          <div className="flex mt-5 justify-center align-middle">
            {/* <p className="text-xl mt-auto text-white text-center">
              {' '}
              {transactionList.count < 10
                ? `Showing 1 to ${transactionList.count} of ${transactionList.count} results`
                : `Showing ${(page - 1) * 10 + 1} to ${Math.min(
                    page * 10,
                    transactionList.count
                  )} of ${transactionList.count} results`}
            </p> */}
          </div>
          <div className="flex mt-5 gap-3">
            <a
              // onClick={decreasePageHandler}
              href="#"
              className="flex items-center justify-center first-line:w-140 h-45 font-sans p-1 md:p-3 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
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
              // onClick={increasePageHandler}
              href="#"
              className=" flex items-center justify-center first-line:w-140 h-45 font-sans md:p-3 p-1 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
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
