import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import FormComponent from "@/components/form/FormComponent";
import FormComponet from "@/components/form/formStaff/FormComponet";

function CreateModal({ flag, handleAdd, render }) {
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
        {render === "STAFF" ? (
          <FormComponet option="create" handleState={handleOk} />
        ) : (
          <FormComponent option="create" handleState={handleOk} />
        )}
      </Modal>
    </>
  );
}

export default CreateModal;
