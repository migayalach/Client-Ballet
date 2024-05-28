import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ListData from "@/components/listData/ListData";
import { useDispatch, useSelector } from "react-redux";

function ModalSelect({ render }) {
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (render === "TEACHER-ALL") {
      dispatch();
    }
    if (render === "TYPE-CLASS-ALL") {
      dispatch();
    }
  }, [render]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ...
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ListData />
      </Modal>
    </>
  );
}
export default ModalSelect;
