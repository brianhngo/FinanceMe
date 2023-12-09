// EditTransactionModalLink.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import EditTransactionModal from './EditTransactionModal';
import { resetTransactionInfo } from '../store/Transactions.js';
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

const EditTransactionLink = ({ transactionId, uid }) => {
  const [editTransactionModal, setEditTransactionModal] = useState(false);
  const dispatch = useDispatch();
  const openEditTransactionModal = () => {
    setEditTransactionModal(true);
  };

  const closeEditTransactionModal = () => {
    dispatch(resetTransactionInfo());
    setEditTransactionModal(false);
  };

  return (
    <>
      <a
        onClick={openEditTransactionModal}
        href="#"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        Edit
      </a>
      {/* Edit Transaction Modal  */}
      <Modal
        isOpen={editTransactionModal}
        onRequestClose={closeEditTransactionModal}
        style={customStyles2}>
        <EditTransactionModal
          uid={uid}
          transactionId={transactionId}
          closeModal={closeEditTransactionModal}
        />
      </Modal>
    </>
  );
};

export default EditTransactionLink;
