import React, { useState, useEffect } from "react";
import Text from "@/components/text/Text";
import { useDispatch } from "react-redux";
import { DatePicker } from "antd";
import { Button, Form, Input } from "antd";

function FormAssistance() {
  const dispatch = useDispatch();
  const [date, setDate] = useState({ dateAssistance: "" });

  const onChange = (date, dateString) => {
    setDate({
      dateAssistance: dateString,
    });
  };

  const onFinish = () => {
    // dispatch(date)
  };

  useEffect(() => {
    return () => {
      console.log("bay");
    };
  }, []);

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
      style={{
        maxWidth: 500,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="Fecha" name="date">
        <DatePicker onChange={onChange} needConfirm />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        <Text text="Crear" />
      </Button>
    </Form>
  );
}

export default FormAssistance;
