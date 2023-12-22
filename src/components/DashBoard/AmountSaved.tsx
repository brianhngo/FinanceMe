import React, { useState, useEffect } from 'react';
import DoughnutChart from './Charts/DoughnutChart';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import BudgetModal from './BudgetModal';
import { useDispatch, useSelector } from 'react-redux';
import { getBudgetChartData } from '../store/Budgets.js';
import { getSavingsChartData } from '../store/Savings.js';
import SavingsModal from './SavingsModal.js';

const emptyData = {
  labels: ['Yes', 'No'],
  datasets: [
    {
      label: 'Poll',
      data: [3, 6],
      backgroundColor: ['black', 'red'],
    },
  ],
};

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

export default function AmountSaved({ userIdentifer }) {
  const data1 = useSelector((state) => state.Budgets.getBudgetChartDatas);
  const data2 = useSelector((state) => state.Savings.SavingsChartDatas);
  console.log('data2', data2);

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

  // Open/Close Savings Modal
  const [savingsModal, setSavingsModal] = useState(false);

  const openSavingsModal = () => {
    setSavingsModal(true);
  };

  const closeSavingsModal = () => {
    setSavingsModal(false);
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
    <section className="ml-5 mr-5 mt-5 mb-5 w-90 h-[90%]">
      <a
        href="#"
        className="block w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-transform transform-gpu hover:-translate-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Monitor Your Tracker: Current Budget Balance and Savings"
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
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
        <div className=" flex">
          <div className="w-[200px] h-[200px]">
            <button
              onClick={openBudgetModal}
              className="w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
              Set Budget Amount
            </button>
            <DoughnutChart chartData={data1 ? data1 : emptyData} />
          </div>
          <div className="w-[200px] h-[200px]">
            <button
              onClick={openSavingsModal}
              className="w-140 h-45 font-sans p-2 text-base uppercase tracking-wider text-11 leading-14 tracking-2.5 font-bold text-black bg-white border-none hover:bg-green-500 hover:shadow-lg hover:text-white  rounded-[45px] shadow-md transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none">
              Set Savings Amount
            </button>
            <DoughnutChart chartData={data2 ? data2 : emptyData} />
          </div>
        </div>
      </a>
    </section>
  );
}
