import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ListData from "@/components/listData/ListData";
import { useDispatch, useSelector } from "react-redux";
import { filterAll, clearFilterAll } from "@/redux/actions";

function ModalSelect({ render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(clearFilterAll());
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(clearFilterAll());
  };

  useEffect(() => {
    if (isModalOpen) {
      if (render === "TEACHER-ALL") {
        dispatch(filterAll("all=teacher"));
      }
      if (render === "TYPE-CLASS-ALL") {
        dispatch(filterAll("all=class"));
      }
    }
  }, [isModalOpen]);

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
