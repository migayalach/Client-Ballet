"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { userLogin } from "@/redux/actions";
import { useAuth } from "@/context/authContext";

function FormLogin() {
  const dispatch = useDispatch();
  const { login } = useAuth();
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

  const onFinish = async () => {
    dispatch(userLogin(user));
    // const x = await login(user.email, user.password);
    // console.log(x);
  };

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
      <Form.Item
        label="Usuario"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor introduzca su usuario!",
          },
        ]}
      >
        <Input name="email" onChange={handleInfo} />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor introduzca su contraseña!",
          },
        ]}
      >
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
        <Button type="primary" htmlType="submit">
          Acceder
        </Button>
      </Form.Item>
    </Form>
  );
}

export default FormLogin;
