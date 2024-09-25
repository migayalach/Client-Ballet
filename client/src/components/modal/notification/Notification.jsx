import React, { useEffect } from "react";
import { Modal } from "antd";

const Notification = ({ dataState: { state, messge }, clearLocalState }) => {
  const [modal, contextHolder] = Modal.useModal();

  const countDown = () => {
    let secondsToGo = 3;
    let instance;

    if (state === "error") {
      instance = modal.error({
        title: "Operacion interrumpida",
        content: `No se puedo realizar esta operacion!`,
        okButtonProps: { style: { display: "none" } },
      });
    }

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
      clearLocalState();
    }, secondsToGo * 1000);
  };

  useEffect(() => {
    countDown();
  }, [state, messge, clearLocalState]);

  return <>{contextHolder}</>;
};
export default Notification;
