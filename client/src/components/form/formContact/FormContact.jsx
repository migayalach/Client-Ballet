// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form, Input } from "antd";

//REDUX
import { createContact, removeAux, removeError } from "@/redux/actions";

// STYLESHEET'
import "./form-contact.css";

// JAVASCRIP
import formContactValidate from "./formContactValidate";

function FormContact() {
  const dispatch = useDispatch();
  const selectAux = useSelector(({ root }) => root?.aux);
  const selectError = useSelector(({ root }) => root?.error);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    nameContact: "",
    emailContact: "",
    phoneContact: "",
  });

  const handleInfo = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setErrors(
      formContactValidate({ ...data, [event.target.name]: event.target.value })
    );
  };

  const onFinish = () => {
    dispatch(createContact(data));
  };

  useEffect(() => {
    if (Object.keys(selectAux).length && !selectError) {
      setTimeout(() => {
        dispatch(removeAux());
      }, 3000);
    } else if (selectError !== null && Object.keys(selectAux).length === 0) {
      setTimeout(() => {
        dispatch(removeError());
      }, 3000);
    }
  }, [selectAux, selectError]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-contact-form">
      <div className="container-text">
        <p className="text-description">
          Dejanos tu número y un <br />
          representante se comunicara <br />
          contigo.
        </p>
      </div>
      <Form
        className="form-ant"
        // name="basic"
        labelCol={{
          span: 7,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nombre">
          <Input name="nameContact" onChange={handleInfo} />
          {errors.nameContact && (
            <p className="messageError">{errors.nameContact}</p>
          )}
        </Form.Item>

        <Form.Item label="Email">
          <Input name="emailContact" onChange={handleInfo} />
          {errors.emailContact && (
            <p className="messageError">{errors.emailContact}</p>
          )}
        </Form.Item>

        <Form.Item label="Teléfono">
          <Input name="phoneContact" onChange={handleInfo} maxLength={8} />
          {errors.phoneContact && (
            <p className="messageError">{errors.phoneContact}</p>
          )}
        </Form.Item>

        <div className="container-button">
          {!Object.keys(errors).length && data.nameContact.length ? (
            <Button className="button-ant" type="primary" htmlType="submit">
              Aceptar
            </Button>
          ) : (
            ""
          )}
        </div>
      </Form>
    </div>
  );
}

export default FormContact;
