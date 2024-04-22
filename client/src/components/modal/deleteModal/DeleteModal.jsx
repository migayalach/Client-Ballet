// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { removeIdHours, removeStaff, removeTypeClass } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function DeleteModal({ idData, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    switch (render) {
      case "STAFF":
        return dispatch(removeStaff(idData));
      case "HOURS":
        return dispatch(removeIdHours(idData));
      case "TYPE-CLASS":
        return dispatch(removeTypeClass(idData));
      default:
        break;
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const optionMessage = (option) => {
    switch (option) {
      case "STAFF":
        return `este usuario`;
      case "HOURS":
        return `esta hora`;
      case "TYPE-CLASS":
        return `este tipo de clase`;
    }
  };

  useEffect(() => {
    showModal(true);
  }, [idData]);

  return (
    <>
      <Modal
        title="Eliminar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{`¿Esta seguro que desea eliminar ${optionMessage(render)}?`}</p>
      </Modal>
    </>
  );
}

export default DeleteModal;
