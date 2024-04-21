// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { removeIdHours, removeStaff } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function DeleteModal({ idData, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (render === "STAFF") {
      dispatch(removeStaff(idData));
    }
    // dispatch(removeIdHours(idData));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const optionMessage = (option) => {
    switch (option) {
      case "STAFF":
        return `este usuario`;
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
        {/* <p>`¿Esta seguro que desea eliminar esta hora?`</p> */}
        <p>{`¿Esta seguro que desea eliminar ${optionMessage(render)}?`}</p>
      </Modal>
    </>
  );
}

export default DeleteModal;
