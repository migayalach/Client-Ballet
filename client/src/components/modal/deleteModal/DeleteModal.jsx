// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import {
  removeIdHours,
  removeUser,
  removeTypeClass,
  removeClass,
  removeEvent,
  removeParams,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function DeleteModal({ idData, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataUser = useSelector(({ root }) => root?.access);

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
        return dispatch(removeClass(dataUser.idUser, idData));
      case "EVENTS":
        return dispatch(removeEvent(idData));
      case "PARAMS":
        return dispatch(
          removeParams(localStorage.getItem("numberClass"), idData)
        );

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
      case "EVENTS":
        return `este evento`;
      case "PARAMS":
        return `esta evaluacion`;
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
