import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import State from "../state/State";
import dayjs from "dayjs";
import { createHours } from "@/redux/actions";
import { Button, Form, TimePicker, Input } from "antd";
import { timeDifference } from "@/utils/calHours";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const config = {
  rules: [
    {
      type: "object",
      required: true,
      message: "Por favor seleccione una hora!",
    },
  ],
};

const FormComponent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    startTime: "",
    endTime: "",
    totalTime: "00:00",
  });

  const handleChange = (name, time, timeString) => {
    setData({
      ...data,
      [name]: timeString,
    });
  };

  const onFinish = () => {
    dispatch(createHours(data));
  };

  useEffect(() => {
    handleChange("totalTime", "", timeDifference(data.startTime, data.endTime));
  }, [data.endTime, data.startTime]);

  // console.log(data);

  return (
    <Form
      name="create_hours"
      {...formItemLayout}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item name="time-start" label="Inicio de clase" {...config}>
        <TimePicker
          onChange={(time, timeString) =>
            handleChange("startTime", time, timeString)
          }
        />
      </Form.Item>
      <Form.Item name="time-end" label="Finalización de clase" {...config}>
        <TimePicker
          onChange={(time, timeString) =>
            handleChange("endTime", time, timeString)
          }
        />
      </Form.Item>
      {/* TODO: Al poner una nueva hora no se muestra el valor salvo se elimine la
      hora de inicio o fin */}
      {data.totalTime && (
        <Form.Item name="duration" label="Duración de clase" >
          <TimePicker
            defaultValue={dayjs(data.totalTime, "HH:mm:ss")}
            disabled
          />
        </Form.Item>
      )}
      <Form.Item name="switch" label="Estado de clase" valuePropName="checked">
        <State />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        }}
      >
        <Button type="primary" htmlType="submit">
          Aceptar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
