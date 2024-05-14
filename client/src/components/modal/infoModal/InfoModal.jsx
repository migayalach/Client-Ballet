import React, { useEffect, useState } from "react";
import { Modal } from "antd";

function InfoModal({ flag, handleInfo, render }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
    handleInfo(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleInfo(false);
  };

  const messageTitle = (render) => {
    switch (render) {
      case "USER":
        return "Información administrar usuarios";

      default:
        break;
    }
  };

  const messageInformation = (render) => {
    switch (render) {
      case "USER":
        return <p>HOlis soy usuario</p>;

      default:
        break;
    }
  };

  useEffect(() => {
    setIsModalOpen(true);
    handleInfo;
  }, [flag]);

  return (
    <>
      <Modal
        title={messageTitle(render)}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {messageInformation(render)}
      </Modal>
    </>
  );
}

export default InfoModal;
