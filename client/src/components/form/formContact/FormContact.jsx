import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import "./form-contact.css";
import { createContact, removeAux, removeError } from "@/redux/actions";

function FormContact() {
  const dispatch = useDispatch();
  const selectAux = useSelector(({ root }) => root?.aux);
  const selectError = useSelector(({ root }) => root?.error);

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
  };

  const onFinish = () => {
    dispatch(createContact(data));
  };

  useEffect(() => {
    if (Object.keys(selectAux).length && !selectError) {
      setTimeout(() => {
        dispatch(removeAux());
      }, 3000);
    } else if(selectError !== null && Object.keys(selectAux).length === 0)  {
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
        name="basic"
        labelCol={{
          span: 7,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nombre" name="name">
          <Input name="nameContact" onChange={handleInfo} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input name="emailContact" onChange={handleInfo} />
        </Form.Item>
        <Form.Item label="Telefono" name="phone">
          <Input name="phoneContact" onChange={handleInfo} />
        </Form.Item>
        <div className="container-button">
          <Button className="button-ant" type="primary" htmlType="submit">
            Aceptar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormContact;
