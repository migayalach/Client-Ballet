import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import FormHours from "@/components/form/formHours/FormHours";
import FormStaff from "@/components/form/formStaff/FormStaff";
import FormTypeClass from "@/components/form/formTypeClass/FormTypeClass";

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
        {render === "STAFF" && (
          <FormStaff option="create" handleState={handleOk} />
        )}
        {render === "HOURS" && (
          <FormHours option="create" handleState={handleOk} />
        )}
        {render === "TYPE-CLASS" && (
          <FormTypeClass option="create" handleState={handleOk} />
        )}
      </Modal>
    </>
  );
}

export default CreateModal;
