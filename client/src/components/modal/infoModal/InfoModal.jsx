import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { infoMessageTitle } from "../optionMessage";
import CollapseData from "./collapseData/CollapseData";

function InfoModal({ flag, handleInfo, render, access }) {
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
        title={infoMessageTitle(render)}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CollapseData render={render} access={access} />
      </Modal>
    </>
  );
}

export default InfoModal;
