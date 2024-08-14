"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { userLogin } from "@/redux/actions";
import { emailRules, passwordRules } from "../validation/validationRules";

function FormLogin() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInfo = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    dispatch(userLogin(user));
  };

  const handleGoogle = async () => {};

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
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
      <Form.Item label="Usuario" name="email" rules={emailRules}>
        <Input name="email" onChange={handleInfo} />
      </Form.Item>

      <Form.Item label="Contraseña" name="password" rules={passwordRules}>
        <Input.Password name="password" onChange={handleInfo} />
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
        {
          <Button type="primary" htmlType="submit">
            Acceder
          </Button>
        }
        <Button onClick={handleGoogle}>Google</Button>
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
