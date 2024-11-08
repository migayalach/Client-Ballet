"use client";
// COMPONET'S

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Button, Checkbox, Form, Input } from "antd";

//REDUX
import { userLogin } from "@/redux/actions";

// STYLESHEET'
import "./form-login.css";

// JAVASCRIP
import formLoginValidation from "./formLoginValidation.js";

function FormLogin() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInfo = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrors(
      formLoginValidation({ ...user, [event.target.name]: event.target.value })
    );
  };

  const onFinish = () => {
    dispatch(userLogin(user));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="FormLogin"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Usuario">
        <Input name="email" onChange={handleInfo} />
        {errors.email ? <p className="messageError">{errors.email}</p> : ""}
      </Form.Item>

      <Form.Item label="Contraseña">
        <Input.Password name="password" onChange={handleInfo} />
        {errors.password ? (
          <p className="messageError">{errors.password}</p>
        ) : (
          ""
        )}
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Recordarme</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" className="button-login">
          Acceder
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
