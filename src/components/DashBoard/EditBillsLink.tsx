// EditTransactionModalLink.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { resetBillingInfo } from '../store/Billings.js';
import EditBillsModal from './EditBillsModal';
import { useDispatch } from 'react-redux';

const customStyles2 = {
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

const EditBillsLink = ({ billId, userIdentifer }) => {
  const dispatch = useDispatch();
  const [editBillModal, setEditBillModal] = useState(false);

  const openEditBillModal = () => {
    setEditBillModal(true);
  };

  const closeEditBillModal = () => {
    dispatch(resetBillingInfo());
    setEditBillModal(false);
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
    </>
  );
};

export default EditBillsLink;
