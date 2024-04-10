import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";

function InfoModal({ flag, handleInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    handleInfo(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleInfo(false);
  };
  
  useEffect(() => {
    setIsModalOpen(true);
    handleInfo;
  }, [flag]);

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default InfoModal;
