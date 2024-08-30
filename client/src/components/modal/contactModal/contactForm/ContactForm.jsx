import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";

function ContactForm({ data }) {
  const dispatch = useDispatch();

  const [info, setInfo] = useState({
    feedback: "",
    stateContact: false,
  });

  const handleInfo = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    setInfo({
      feedback: data?.feedback,
      stateContact: data?.stateContact,
    });

    return () => {
      setInfo({
        feedback: "",
        stateContact: false,
      });
    };
  }, []);

  return (
    <div>
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
        {/* <Form.Item label="Nombre" name="name">

        </Form.Item>
        <Form.Item label="Email" name="email">

        </Form.Item>
        <Form.Item label="Telefono" name="phone">

        </Form.Item> */}
      </Form>
    </div>
  );
}

export default ContactForm;
