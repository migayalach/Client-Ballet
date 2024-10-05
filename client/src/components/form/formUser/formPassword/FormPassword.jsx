// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form, Input } from "antd";

//REDUX
import { changePassword } from "@/redux/actions.js";

// STYLESHEET'

// JAVASCRIP
import formValidationPassword from "./formValidationPassword.js";

function FormPassword() {
  const dispatch = useDispatch();
  const selectData = useSelector(({ root }) => root?.access);
  const [errors, setErrors] = useState({});
  const [errorSms, setErrorSms] = useState({});
  const [flag, setFlag] = useState(false);
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
    setErrorSms({});
    setFlag(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
      <Form.Item label="Antigua contraseña:">
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

      {<p className="messageError">{errorSms.message}</p>}

      {!Object.keys(errors).length &&
      data.repeatNewPassword?.length &&
      !flag ? (
        <Button type="primary" htmlType="submit" className="button-login">
          Cambiar contraseña
        </Button>
      ) : (
        ""
      )}
    </Form>
  );
}

export default FormPassword;
