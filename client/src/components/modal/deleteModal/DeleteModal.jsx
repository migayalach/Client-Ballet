// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

// LIBRARY

//REDUX
import {
  removeIdHours,
  removeUser,
  removeTypeClass,
  removeClass,
} from "@/redux/actions";

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
      case "USER":
        return dispatch(removeUser(idData));
      case "HOURS":
        return dispatch(removeIdHours(idData));
      case "TYPE-CLASS":
        return dispatch(removeTypeClass(idData));
      case "CLASS":
        return dispatch(removeClass(idData));
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
      case "USER":
        return `este usuario`;
      case "HOURS":
        return `esta hora`;
      case "TYPE-CLASS":
        return `este tipo de clase`;
      case "CLASS":
        return `esta clase`;
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
