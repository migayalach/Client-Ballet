import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import FormComponent from "@/components/form/FormComponent";

function CreateModal({ flag, handleAdd }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    handleAdd(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleAdd(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    handleAdd;
  }, [flag]);

  return (
    <>
      <Modal
        title="Crear nueva hora"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormComponent option="create" handleState={handleOk} />
      </Modal>
    </>
  );
}

export default CreateModal;
