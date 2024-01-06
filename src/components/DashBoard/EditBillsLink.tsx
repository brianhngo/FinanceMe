// EditTransactionModalLink.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { resetBillingInfo, getBillings } from '../store/Billings.js';
import EditBillsModal from './EditBillsModal';
import ConfirmationModal from './ConfirmationModal.js';
import { useDispatch } from 'react-redux';

const customStyles2 = {
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

const EditBillsLink = ({ billId, userIdentifer, sort }) => {
  const dispatch = useDispatch();
  const [editBillModal, setEditBillModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [completionStatus, setCompletionStatus] = useState(false);

  const openStatusHandler = () => {
    setConfirmationModal(true);
  };

  const closedStatusHandler = () => {
    setCompletionStatus(false);
    setConfirmationModal(false);
  };

  const openEditBillModal = () => {
    setEditBillModal(true);
  };

  const closeEditBillModal = () => {
    dispatch(resetBillingInfo());
    setEditBillModal(false);
  };

  const handleCheckboxChange = (event) => {
    // If the checkbox is checked, open the confirmation modal
    if (event.target.checked) {
      openStatusHandler();
    } else {
      // If the checkbox is unchecked, close the confirmation modal
      setCompletionStatus(false);
      setConfirmationModal(false);
    }
  };

  return (
    <>
      <a
        onClick={openEditBillModal}
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Edit
      </a>
      <Modal
        isOpen={editBillModal}
        onRequestClose={closeEditBillModal}
        style={customStyles2}>
        <EditBillsModal
          userIdentifer={userIdentifer}
          billId={billId}
          closeModal={closeEditBillModal}
        />
      </Modal>

      <Modal
        isOpen={confirmationModal}
        onRequestClose={closedStatusHandler}
        style={customStyles2}>
        <ConfirmationModal
          billId={billId}
          userIdentifer={userIdentifer}
          closeModal={closedStatusHandler}
        />
      </Modal>
      <div className="ml-5 flex flex-col">
        <label htmlFor="exampleCheckbox">Completed?</label>
        <input
          type="checkbox"
          id="exampleCheckbox"
          checked={completionStatus}
          onChange={handleCheckboxChange}
        />
      </div>
    </>
  );
};

export default EditBillsLink;
