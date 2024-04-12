import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import State from "../state/State";
import { createHours, editIdHours } from "@/redux/actions";
import { Button, Form } from "antd";
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

  const [data, setData] = useState({
    startTime: "00:00:00",
    endTime: "00:00:00",
    totalTime: "00:00:00",
    stateHours: false,
  });

  const handleChange = (name, time, timeString, value) => {
    setData({
      ...data,
      [name]: name !== "stateHours" ? timeString : value,
    });
  };

  const onFinish = () => {
    option === "edit"
      ? dispatch(editIdHours({ ...data, idHours: idData }))
      : dispatch(createHours(data)) && handleState();
  };

  useEffect(() => {
    if (idData) {
      dispatch(getByIdHours(idData));
    }
  }, [idData]);

  useEffect(() => {
    if (option === "edit" && dataHours.data) {
      setData({
        startTime: dataHours.data.startTime,
        endTime: dataHours.data.endTime,
        totalTime: dataHours.data.totalTime,
        stateHours: dataHours.data.stateHours,
      });
    }
  }, [dataHours, option]);

  useEffect(() => {
    if (data.startTime !== "00:00:00" && data.endTime !== "00:00:00") {
      handleChange(
        "totalTime",
        "",
        timeDifference(data.startTime, data.endTime)
      );
    }
  }, [data.endTime, data.startTime]);

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
        <TotalHours
          name="startTime"
          hours={data.startTime}
          handleChange={handleChange}
        />
      </Form.Item>

      <Form.Item name="time-end" label="Finalización de clase" {...config}>
        <TotalHours
          name="endTime"
          hours={data.endTime}
          handleChange={handleChange}
        />
      </Form.Item>

      <Form.Item name="duration" label="Duración de clase">
        <TotalHours name="total" hours={data.totalTime} />
      </Form.Item>

      {option === "edit" && (
        <Form.Item
          name="switch"
          label="Estado de clase"
          valuePropName="checked"
        >
          <State
            name="stateHours"
            stateHours={data.stateHours}
            handleChange={handleChange}
          />
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
