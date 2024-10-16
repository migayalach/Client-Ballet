// COMPONET'S
import InputComponent from "@/components/inputComponent/InputComponent";
import SelectComponet from "@/components/select/SelectComponet";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import { createClass, getByIdClass, editClass } from "@/redux/actions";
import Text from "@/components/text/Text";
import State from "@/components/state/State";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";

// STYLESHEET'
import "./form-class.css";

// JAVASCRIP

function FormClass({ idData, option, handleState, idUserCreate }) {
  const dispatch = useDispatch();
  const selectClass = useSelector(({ root }) => root?.data);
  const selectState = useSelector(({ root }) => root?.state);
  const [data, setData] = useState({
    idUserCreate: +idUserCreate,
    idUser: 0,
    idHours: 0,
    idTypeClass: 0,
    parallel: "",
    stateClass: true,
  });
  const [nameData, setNameData] = useState({
    user: "",
    typeClass: "",
    hours: "",
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
  };

  const handleSelect = (idData, name, flag) => {
    if (flag === "TYPE-CLASS") {
      setData({ ...data, idTypeClass: idData });
      setNameData({ ...nameData, typeClass: name });
    } else if (flag === "USER") {
      setData({ ...data, idUser: idData });
      setNameData({ ...nameData, user: name });
    } else if (flag === "HOURS") {
      setData({ ...data, idHours: idData });
      setNameData({ ...nameData, hours: name });
    }
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateClass: boolean,
    });
  };

  const onFinish = () => {
    if (option === "editClass") {
      dispatch(editClass({ ...data, idClass: selectClass.idClass }));
    } else {
      dispatch(createClass(data));
    }
  };

  useEffect(() => {
    if (selectState === "create-class") {
      setData({
        idUserCreate: 0,
        idUser: 0,
        idHours: 0,
        idTypeClass: 0,
        parallel: "",
        stateClass: true,
      });
      handleState();
    }
  }, [selectState]);

  useEffect(() => {
    if (selectClass !== null) {
      setData({
        idUser: selectClass?.idUser,
        idHours: selectClass?.idHours,
        idTypeClass: selectClass?.idTypeClass,
        parallel: selectClass?.parallel,
        stateClass: selectClass?.stateClass,
      });
      setNameData({
        hours: selectClass?.totalTime,
        typeClass: selectClass?.nameClass,
        user:
          selectClass?.nameUser && selectClass?.lastNameUser
            ? `${selectClass?.nameUser} ${selectClass?.lastNameUser}`
            : "",
      });
    }
  }, [selectClass]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 13,
        }}
        layout="horizontal"
        style={{
          maxWidth: 500,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Profesor">
          <div className="container-input-modal">
            <InputComponent
              placeholder="Selecciona un profesor"
              data={nameData.user}
            />
            <ModalSelect render="TEACHER-ALL" handleSelect={handleSelect} />
          </div>
        </Form.Item>

        <Form.Item label="Tipo de danza">
          <div className="container-input-modal">
            <InputComponent
              placeholder="Selecciona un tipo de clase"
              data={nameData.typeClass}
            />
            <ModalSelect render="TYPE-CLASS-ALL" handleSelect={handleSelect} />
          </div>
        </Form.Item>

        <Form.Item label="Horario">
          <div className="container-input-modal">
            <InputComponent
              placeholder="Selecciona un horario"
              data={nameData.hours}
            />
            <ModalSelect render="HOURS-ALL" handleSelect={handleSelect} />
          </div>
        </Form.Item>

        <Form.Item label="Paralelo">
          <InputComponent
            onChange={handleChange}
            name="parallel"
            placeholder="5TO-B"
            data={data?.parallel}
          />
        </Form.Item>

        {option === "editClass" && (
          <Form.Item label="Estado de clase">
            <State stateHours={data?.stateClass} handleChange={onChangeState} />
          </Form.Item>
        )}
        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
    </div>
  );
}

export default FormClass;
