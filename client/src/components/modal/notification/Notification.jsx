import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import { removeError } from "@/redux/actions";

const Notification = ({ dataState: { state, message }, clearLocalState }) => {
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const [isNotified, setIsNotified] = useState(false);

  const countDown = () => {
    if (isNotified) return;
    setIsNotified(true);

    let secondsToGo = 3;
    let instance;

    if (state === "error") {
      instance = modal.error({
        title: "Operación interrumpida",
        content: `${message}`,
      });
    } else if (state === "create") {
      instance = modal.success({
        title: "Operación realizada con éxito",
        content: `Creado con éxito!`,
      });
    } else if (state === "delete") {
      instance = modal.info({
        title: "Operación realizada con éxito",
        content: `Eliminado con éxito!`,
      });
    } else if (state === "edit") {
      instance = modal.warning({
        title: "Operación realizada con éxito",
        content: `Actualización realizada con éxito!`,
      });
    }

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
      clearLocalState();
      dispatch(removeError());
      setIsNotified(false);
    }, secondsToGo * 1000);
  };

  useEffect(() => {
    if (state && !isNotified) {
      countDown();
    }
  }, [state, message, clearLocalState, isNotified]);

  return <>{contextHolder}</>;
};

export default Notification;
