// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import { createHours, editIdHours, getByIdHours } from "@/redux/actions";

// STYLESHEET'

// JAVASCRIP
import { timeDifference } from "@/utils/calHours";
import TotalHours from "../../totalHours/TotalHours";
import State from "../../state/State";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const FormHours = ({ idData, option, handleState }) => { 
  const dispatch = useDispatch();
  const dataHours = useSelector((state) => state.root.data);
  const [data, setData] = useState({
    startTime: "00:00:00",
    endTime: "00:00:00",
    totalTime: "00:00:00",
    stateHours: false,
  });

  useEffect(() => {
    if (idData) {
      dispatch(getByIdHours(idData));
    }
  }, [idData, dispatch]);

  useEffect(() => {
    if (option === "editHour" && dataHours) {
      setData({
        startTime: dataHours.startTime,
        endTime: dataHours.endTime,
        totalTime: dataHours.totalTime,
        stateHours: dataHours.stateHours,
      });
    }
  }, [dataHours, option]);

  useEffect(() => {
    if (data.startTime !== "00:00:00" && data.endTime !== "00:00:00") {
      const totalTime = timeDifference(data.startTime, data.endTime);
      setData((prevData) => ({
        ...prevData,
        totalTime,
      }));
    }
  }, [data.endTime, data.startTime]);

  const handleChange = (name, time, timeString, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: name !== "stateHours" ? timeString : value,
    }));
  };

  const handleChangeState = (boolean) => {
    setData((prevData) => ({
      ...prevData,
      stateHours: boolean,
    }));
  };

  const onFinish = () => {
    if (option === "editHour") {
      dispatch(editIdHours({ ...data, idHours: idData }));
    } else {
      dispatch(createHours(data));
      setData({
        startTime: "00:00:00",
        endTime: "00:00:00",
        totalTime: "00:00:00",
        stateHours: false,
      });
      handleState();
    }
  };

  return (
    <Form
      name=""
      {...formItemLayout}
      onFinish={onFinish}
      style={{ maxWidth: 650 }}
    >
      <Form.Item label="Inicio de clase">
        <TotalHours
          name="startTime"
          hours={data.startTime}
          handleChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Finalización de clase">
        <TotalHours
          name="endTime"
          hours={data.endTime}
          handleChange={handleChange}
        />
      </Form.Item>

      <Form.Item label="Duración de clase">
        <TotalHours name="total" hours={data.totalTime} />
      </Form.Item>

      {option === "edit" && (
        <Form.Item
          label="Estado de clase"
          valuePropName="checked"
        >
          <State
            stateHours={data.stateHours}
            handleChange={handleChangeState}
          />
        </Form.Item>
      )}

      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Aceptar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormHours;
