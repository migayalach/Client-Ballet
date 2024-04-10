// COMPONET'S
import FormComponent from "@/components/form/FormComponent";

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'

function EditModal({ idData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, [idData]);

  return (
    <>
      <Modal
        title="Editar informacion"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormComponent idData={idData} option="edit" />
      </Modal>
    </>
  );
}

export default EditModal;
