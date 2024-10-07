// COMPONET'S
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form, Input } from "antd";

//REDUX
import { changePassword, removeAux, removeError } from "@/redux/actions.js";

// STYLESHEET'
import "./form-password.css";

// JAVASCRIP
import formValidationPassword from "./formValidationPassword.js";

function FormPassword({ handleOk }) {
  const dispatch = useDispatch();
  const selectData = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.aux);
  const selectError = useSelector(({ root }) => root.error);
  const [errors, setErrors] = useState({});
  const [errorSms, setErrorSms] = useState({});
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState({});
  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  });

  const handleInfo = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setErrors(
      formValidationPassword({
        ...data,
        [event.target.name]: event.target.value,
      })
    );
  };

  const onFinish = () => {
    const idUser = selectData?.idUser;
    dispatch(changePassword({ idUser, ...data }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (selectState?.state === "changePassword") {
      setMessage({ ...selectState });
      setTimeout(() => {
        setErrorSms({});
        setFlag(false);
        setMessage({});
        dispatch(removeAux());
        handleOk();
      }, 2000);
    }
  }, [selectState]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeError());
    }, 1000);
  }, [selectError]);

  useEffect(() => {
    if (!data.oldPassword || !data.newPassword || !data.repeatNewPassword) {
      setFlag(true);
      setErrorSms({
        state: true,
        message: "No puede haber campos vacíos.",
      });
    } else if (
      data.oldPassword === data.newPassword ||
      data.oldPassword === data.repeatNewPassword
    ) {
      setFlag(true);
      setErrorSms({
        state: true,
        message: "No puede repetir la vieja contraseña.",
      });
    } else if (data.newPassword !== data.repeatNewPassword) {
      setFlag(true);
      setErrorSms({
        state: true,
        message: "Las contraseñas no coinciden.",
      });
    } else if (Object.keys(errors).length === 0) {
      setFlag(false);
      setErrorSms({
        state: false,
        message: "Contraseña válida.",
      });
    }
  }, [data.newPassword, data.repeatNewPassword, data.oldPassword, errors]);

  return (
    <Form
      name="FormChangePass"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      style={{
        maxWidth: 700,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Contraseña actual:">
        <Input.Password name="oldPassword" onChange={handleInfo} />
        {errors.oldPassword && (
          <p className="messageError">{errors.oldPassword}</p>
        )}
      </Form.Item>

      <Form.Item label="Nueva contraseña:">
        <Input.Password name="newPassword" onChange={handleInfo} />
        {errors.newPassword && (
          <p className="messageError">{errors.newPassword}</p>
        )}
      </Form.Item>

      <Form.Item label="Nueva contraseña:">
        <Input.Password name="repeatNewPassword" onChange={handleInfo} />
        {errors.repeatNewPassword && (
          <p className="messageError">{errors.repeatNewPassword}</p>
        )}
      </Form.Item>

      <div className="container-send">
        {message.state === "changePassword" ? (
          <span className="success-update">{message.message}!</span>
        ) : selectError?.error === "La contraseña antigua es incorrecta" ? (
          <span className="error-update">
            La contraseña antigua es incorrecta!
          </span>
        ) : (
          <div>
            {!Object.keys(errors).length &&
            data.repeatNewPassword?.length &&
            !flag &&
            selectError === null ? (
              <Button type="primary" htmlType="submit" className="button-login">
                Cambiar contraseña
              </Button>
            ) : null}
            <span
              className={
                errorSms.message === "Contraseña válida."
                  ? "messageSuccess"
                  : "messageError"
              }
            >
              {errorSms.message}
            </span>
          </div>
        )}
      </div>
    </Form>
  );
}

export default FormPassword;
