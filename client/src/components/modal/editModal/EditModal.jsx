// COMPONET'S
import FormComponent from "@/components/form/FormComponent";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'

function EditModal({ idData, text }) {
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
  
  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Text text={text} />
      </Button>

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
