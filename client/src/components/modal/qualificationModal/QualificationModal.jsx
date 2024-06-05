import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import FormQualification from "@/components/form/formQualification/FormQualification";

function QualificationModal({ flag, handleQualification }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    handleQualification(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleQualification(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    handleQualification;
    return () => {
      // console.log(":D");
    };
  }, [flag]);

  return (
    <div>
      <Modal
        title="Crear parametros para calificar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormQualification />
      </Modal>
    </div>
  );
}

export default QualificationModal;
