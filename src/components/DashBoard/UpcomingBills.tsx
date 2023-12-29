import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBillings } from '../store/Billings.js';
import AddBillsModal from './AddBillsModal.js';
import Modal from 'react-modal';
import EditBillsLink from './EditBillsLink.js';

const customStyles = {
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

export default function UpcomingBills({ userIdentifer }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Billings.getBillingsList);

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
      })
    );
  }, [userIdentifer]);

  return (
    <section className="ml-5 mr-5 mt-5 mb-5 w-full mx-auto h-[90%]">
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
            className="w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
            Add a Bill
          </button>
        </div>
        <div className="relative w-full h-[20%] overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[90%] h-[50%] m-3 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">Description</div>
                </th>

                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Amount ($)
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Due Date
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Is Recurring
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center">
                    Recurring Interval
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
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
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <td className="px-6 py-4">{row.description}</td>
                          <td className="px-6 py-4">{row.amount}</td>
                          <td className="px-6 py-4">{row.date}</td>
                          <td className="px-6 py-4">
                            {row.isRecurring === true ? 'yes' : 'no'}
                          </td>
                          <td className="px-6 py-4">
                            {row.recurrenceInterval}
                          </td>
                          <td className="px-6 py-4 text-right flex flex-row">
                            <EditBillsLink
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
              // onClick={increasePageHandler}
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
