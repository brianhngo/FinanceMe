import React, { useState, useEffect } from 'react';
import DoughnutChart from './Charts/DoughnutChart';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import BudgetModal from './BudgetModal';
import { useDispatch, useSelector } from 'react-redux';
import { getBudgetChartData } from '../store/Budgets.js';
import { getSavingsChartData } from '../store/Savings.js';
import SavingsModal from './SavingsModal.js';
import DeleteBudgetsModal from './DeleteBudgetsModal.js';
import DeleteSavingsModal from './DeleteSavingsModal.js';

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

export default function AmountSaved({ userIdentifer }) {
  const data1 = useSelector((state) => state.Budgets.getBudgetChartDatas);
  const data2 = useSelector((state) => state.Savings.SavingsChartDatas);

  // Modal Status for Adding New Transaction
  const dispatch = useDispatch();
  const [budgetModal, setBudgetModal] = useState(false);

  // Open/close Budgets Modal
  const openBudgetModal = () => {
    setBudgetModal(true);
  };

  const closeBudgetModal = () => {
    setBudgetModal(false);
  };

  // Open/Close Budgets Delete Modal
  const [budgetModalDelete, setBudgetModalDelete] = useState(false);

  const openBudgetModalDelete = () => {
    setBudgetModalDelete(true);
  };

  const closeBudgetModalDelete = () => {
    setBudgetModalDelete(false);
  };

  // Open/Close Savings Modal
  const [savingsModal, setSavingsModal] = useState(false);

  const openSavingsModal = () => {
    setSavingsModal(true);
  };

  const closeSavingsModal = () => {
    setSavingsModal(false);
  };

  // Open/Close Budgets Delete Modal
  const [savingsModalDelete, setSavingsModalDelete] = useState(false);

  const openSavingsModalDelete = () => {
    setSavingsModalDelete(true);
  };

  const closeSavingsModalDelete = () => {
    setSavingsModalDelete(false);
  };

  useEffect(() => {
    dispatch(
      getBudgetChartData({
        userIdentifer: userIdentifer,
      })
    );
    dispatch(
      getSavingsChartData({
        userIdentifer: userIdentifer,
      })
    );
  }, [userIdentifer]);
  return (
    <section className="md:ml-10 md:mr-10   mr-1 ml-1 mt- mb-5 md:mt-5 md:mb-5 w-[400px]  h-full md:w-[90%] mx-auto md:h-full">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mt-2 mb-2 text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
          Monitor Your Tracker: Current Budget Balance and Savings
        </h5>
        <p className="block mt-5 mb-5  text-2xl text-center font-medium text-white">
          Set your monthly budget and savings goals effortlessly with our
          user-friendly platform
        </p>
        <Modal
          isOpen={budgetModal}
          onRequestClose={closeBudgetModal}
          style={customStyles}>
          <BudgetModal
            uid={userIdentifer}
            closeModal={() => closeBudgetModal()}
          />
        </Modal>
        <Modal
          isOpen={savingsModal}
          onRequestClose={closeSavingsModal}
          style={customStyles}>
          <SavingsModal
            uid={userIdentifer}
            closeModal={() => closeSavingsModal()}
          />
        </Modal>

        {/* Delete Modals  */}

        {/* budget */}
        <Modal
          isOpen={budgetModalDelete}
          onRequestClose={closeBudgetModalDelete}
          style={customStyles}>
          <DeleteBudgetsModal
            uid={userIdentifer}
            closeModal={() => closeBudgetModalDelete()}
          />
        </Modal>

        {/* Saving */}
        <Modal
          isOpen={savingsModalDelete}
          onRequestClose={closeSavingsModalDelete}
          style={customStyles}>
          <DeleteSavingsModal
            uid={userIdentifer}
            closeModal={() => closeSavingsModalDelete()}
          />
        </Modal>
        <div className=" flex flex-col md:flex justify-center align-middle mx-auto w-full">
          <div className="w-full h-full mx-auto ">
            <div className="md:flex md:flex-row flex flex-col gap-10">
              <button
                onClick={openBudgetModal}
                className="md:w-140 w-25 h-35 md:h-45 mx-auto block font-sans p-1 md:p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
                Set Budget Amount
              </button>
              <button
                onClick={openBudgetModalDelete}
                className="md:w-140 w-25 h-35 md:h-45 mx-auto block font-sans p-1 md:p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
                Delete Budget Tracker
              </button>
            </div>

            <div className="w-[350px] h-[300px] mx-auto">
              <DoughnutChart chartData={data1 ? data1 : null} />
            </div>
          </div>
          <div className="w-full h-full mx-auto">
            <div className="md:flex md:flex-row flex flex-col gap-10">
              <button
                onClick={openSavingsModal}
                className="w-140 mx-auto block h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
                Set Savings Amount
              </button>
              <button
                onClick={openSavingsModalDelete}
                className="w-140 h-45 mx-auto block font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-red-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
                Delete Savings Tracker
              </button>
            </div>
            <div className="w-[350px] h-[300px] mx-auto">
              <DoughnutChart chartData={data2 ? data2 : null} />
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
