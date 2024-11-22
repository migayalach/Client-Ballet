// COMPONET'S
import State from "@/components/state/State";
import Text from "@/components/text/Text";
import InputComponent from "@/components/inputComponent/InputComponent";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form, Input } from "antd";

//REDUX
import {
  getClassAll,
  createClassStudent,
  getStudentIdUser,
  updateStudentClassId,
} from "@/redux/actions";

// STYLESHEET'
import "./form-class-student.css";

// JAVASCRIP

function FormClassStudent({ handleState, idClass, option, idUser }) {
  const dispatch = useDispatch();
  const selectStudent = useSelector(({ root }) => root?.data);
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
    if (option === "editStudentClass") {
      dispatch(updateStudentClassId(data));
    } else {
      dispatch(createClassStudent(data));
      setData({
        idClass: 0,
        idUser: 0,
        stateStudent: true,
        nameStudent: "",
      });
    }
    handleState();
  };

  useEffect(() => {
    if (option === "editStudentClass") {
      const idClassLS = localStorage.getItem("classListStudent");
      dispatch(getStudentIdUser(idClassLS, idUser));
    }
  }, [option]);

  useEffect(() => {
    if (selectStudent) {
      const idClassLS = localStorage.getItem("classListStudent");
      setData({
        idUser: idUser,
        idClass: +idClassLS,
        nameStudent: `${selectStudent?.nameUser} ${selectStudent?.lastNameUser}`,
        stateStudent: selectStudent?.stateStudent,
      });
    }
  }, [selectStudent]);

  useEffect(() => {
    if (option !== "editStudentClass") {
      dispatch(getClassAll(idClass));
    }
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
      {option === "create" && (
        <Form.Item label="Selecciona un Alumno">
          <div className="form-class-student">
            <ModalSelect
              render="STUDEN-ALL"
              handleSelect={handleSelect}
              idClass={idClass}
            />
            <InputComponent
              placeholder="Selecciona un usuario"
              data={data.nameStudent}
            />
          </div>
        </Form.Item>
      )}

      {option === "editStudentClass" && (
        <Form.Item label="Nombre del Alumn@">
          <Input
            value={data.nameStudent}
            disabled={true}
            style={{ color: "black", fontWeight: "bold", opacity: 0.5 }}
          />
        </Form.Item>
      )}

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
