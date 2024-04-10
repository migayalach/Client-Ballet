// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { removeIdHours } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function DeleteModal({ idData }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(removeIdHours(idData));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    showModal(true);
  }, [idData]);

  return (
    <>
      <Modal
        title="Eliminar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>¿Esta seguro que desea eliminar esta hora?</p>
      </Modal>
    </>
  );
}

export default DeleteModal;
