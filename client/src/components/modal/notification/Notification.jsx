import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "antd";
import {
  removeError,
  stateClear,
  removeAux,
  successClear,
} from "@/redux/actions";

const Notification = ({ dataState, clearLocalState }) => {
  console.log(dataState);

  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const [isNotified, setIsNotified] = useState(false);

  const countDown = () => {
    if (isNotified) return;
    setIsNotified(true);

    let secondsToGo = 3;
    let instance;

    if (dataState.state === "success") {
      if (dataState.action === "create-contact") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
        dispatch(successClear());
      } else if (dataState.action === "edit-contact") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-event") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "edit-event") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "delete-event") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-typeClass") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "delete-typeClass") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "edit-typeClass") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-hour") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "delete-hour") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "edit-hour") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-user") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "edit-user") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "delete-user") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-class") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "edit-class") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "delete-class") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "registration-success") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
        dispatch(stateClear());
      } else if (dataState.action === "create-assistance") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
        dispatch(stateClear());
      } else if (dataState.action === "delete-assistance") {
        instance = modal.info({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "create-list-assitance") {
        instance = modal.success({
          title: "Operación exitosa",
          content: `${dataState.message}`,
        });
        dispatch(stateClear());
      }
    } else if (dataState.state === "error") {
      if (dataState.action === "error-create-contact") {
        instance = modal.error({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "error-delete-event") {
        instance = modal.error({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "error-create-typeClass") {
        instance = modal.error({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "error-delete-hour") {
        instance = modal.error({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "error-create-user") {
        instance = modal.info({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
        dispatch(removeError());
      } else if (dataState.action === "error-delete-class") {
        instance = modal.info({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "registration-error") {
        instance = modal.info({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      } else if (dataState.action === "error-delete-assistance") {
        instance = modal.info({
          title: "Operación interrumpida",
          content: `${dataState.message}`,
        });
      }
      dispatch(removeError());
    }

    if (dataState.state === "login") {
      instance = modal.success({
        title: "Operación exitosa",
        content: `${dataState.message}`,
      });
      dispatch(stateClear());
    } else if (dataState.action === "error-login") {
      console.log("entre");

      instance = modal.error({
        title: "Operación interrumpida",
        content: `${dataState.message}`,
      });
      dispatch(removeError());
    }

    const timer = setInterval(() => {
      secondsToGo -= 1;
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      // instance.destroy();
      clearLocalState();
      setIsNotified(false);
    }, secondsToGo * 1000);
  };

  useEffect(() => {
    if (Object.keys(dataState).length && !isNotified) {
      countDown();
    }
  }, [dataState, isNotified]);

  return <>{contextHolder}</>;
};

export default Notification;
