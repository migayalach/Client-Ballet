import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import State from "../state/State";
import dayjs from "dayjs";
import { createHours } from "@/redux/actions";
import { Button, Form, TimePicker, Input } from "antd";
import { timeDifference } from "@/utils/calHours";
import TotalHours from "../totalHours/TotalHours";
import { getByIdHours } from "@/redux/actions";

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
  // rules: [
  //   {
  //     type: "object",
  //     required: true,
  //     message: "Por favor seleccione una hora!",
  //   },
  // ],
};

const FormComponent = ({ idData, option, handleState }) => {
  const dispatch = useDispatch();
  const dataHours = useSelector((state) => state.root);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState({
    startTime: "",
    endTime: "",
    totalTime: "",
  });

  const handleChange = (name, time, timeString) => {
    setData({
      ...data,
      [name]: timeString,
    });
  };

  const onFinish = () => {
    dispatch(createHours(data));
    setData({
      startTime: "",
      endTime: "",
      totalTime: "",
    });
    handleState();
  };

  useEffect(() => {
    handleChange("totalTime", "", timeDifference(data.startTime, data.endTime));
  }, [data.endTime, data.startTime]);

  useEffect(() => {
    if (idData) {
      dispatch(getByIdHours(idData));
    }
  }, [idData]);

  useEffect(() => {
    if (dataHours.data) {
      data.startTime = dataHours.data.startTime;
      data.endTime = dataHours.data.endTime;
      data.totalTime = dataHours.data.totalTime;
      setFlag(true);
    }
  }, [dataHours]);

  useEffect(() => {
    data.startTime = "";
    data.endTime = "";
    data.totalTime = "";
  }, [handleState]);

  console.log(data);
  return (
    <Form
      name=""
      {...formItemLayout}
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item name="time-start" label="Inicio de clase" {...config}>
        <TotalHours name="startTime" handleChange={handleChange} />
      </Form.Item>

      <Form.Item name="time-end" label="Finalización de clase" {...config}>
        <TotalHours name="endTime" handleChange={handleChange} />
      </Form.Item>

      <Form.Item name="duration" label="Duración de clase">
        <TotalHours flag="total" hours={data.totalTime} />
      </Form.Item>

      {option === "edit" && (
        <Form.Item
          name="switch"
          label="Estado de clase"
          valuePropName="checked"
        >
          <State />
        </Form.Item>
      )}

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
