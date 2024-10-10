// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import State from "@/components/state/State";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import { getClassAll, getUserAll, createClassStudent } from "@/redux/actions";
import InputComponent from "@/components/inputComponent/InputComponent";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";

// STYLESHEET'
import "./form-class-student.css";

// JAVASCRIP

function FormClassStudent({ handleState, idClass }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    idClass: +idClass,
    nameStudent: "",
    idUser: 0,
    stateStudent: true,
  });

  const handleSelect = (idData, name, flag) => {
    setData({ ...data, idUser: idData, nameStudent: name });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateStudent: boolean,
    });
  };

  const onFinish = () => {
    dispatch(createClassStudent(data));
    setData({
      idClass: 0,
      idUser: 0,
      stateStudent: true,
      nameStudent: "",
    });
    handleState();
  };

  useEffect(() => {
    dispatch(getClassAll(idClass));
  }, []);

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      style={{
        maxWidth: 500,
      }}
      onFinish={onFinish}
    >
      <Form.Item label="Selecciona un Alumno">
        <div className="form-class-student">
          <ModalSelect render="STUDEN-ALL" handleSelect={handleSelect} />
          <InputComponent
            placeholder="Selecciona un usuario"
            data={data.nameStudent}
          />
        </div>
      </Form.Item>

      <Form.Item label="Estado del alumno">
        <State stateHours={data.stateStudent} handleChange={onChangeState} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        <Text text="Crear" />
      </Button>
    </Form>
  );
}

export default FormClassStudent;
