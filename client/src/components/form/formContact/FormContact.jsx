import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import "./form-contact.css";

function FormContact() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInfo = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    // dispatch(userLogin(user));
  };

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
          <Input name="name" onChange={handleInfo} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input name="email" onChange={handleInfo} />
        </Form.Item>
        <Form.Item label="Telefono" name="phone">
          <Input name="phone" onChange={handleInfo} />
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
