import React, { useState, useEffect } from "react";
import { Modal } from "antd";

function DeleteModal({ idData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
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
