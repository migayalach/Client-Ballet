"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import FormComponent from "../form/formHours/FormHours";
import Text from "../text/Text";

function ModalComponent({ idData, text }) {
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
        <Text text={text}/>
      </Button>
      <Modal
        title="Horas"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormComponent />
      </Modal>
    </>
  );
}

export default ModalComponent;
