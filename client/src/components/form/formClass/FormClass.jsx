// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";
import InputComponent from "@/components/inputComponent/InputComponent";
import SelectComponet from "@/components/select/SelectComponet";

//REDUX
import {
  getStaffAll,
  getHoursAll,
  getTypeClassAll,
  createClass,
  getByIdClass,
  editClass,
} from "@/redux/actions";
import Text from "@/components/text/Text";
import State from "@/components/state/State";

// STYLESHEET'

// JAVASCRIP

function FormClass({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const selectClass = useSelector(({ root }) => root?.data);
  const selectStaff = useSelector(({ root }) => root?.staff);
  const selectHour = useSelector(({ root }) => root?.hours);
  const selectTypeClass = useSelector(({ root }) => root?.typeClass);

  const [data, setData] = useState({
    idUser: 0,
    idHours: 0,
    idTypeClass: 0,
    parallel: "",
    stateClass: true,
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateClass: boolean,
    });
  };

  const onFinish = () => {
    if (option === "edit") {
      dispatch(editClass({ ...data, idClass: idData }));
    } else {
      dispatch(createClass(data));
      setData({
        idUser: 0,
        idHours: 0,
        idTypeClass: 0,
        parallel: "",
        stateClass: true,
      });
      handleState();
    }
  };

  useEffect(() => {
    dispatch(getStaffAll());
    dispatch(getHoursAll());
    dispatch(getTypeClassAll());
  }, []);

  useEffect(() => {
    idData && dispatch(getByIdClass(idData));
  }, [idData]);

  useEffect(() => {
    if (option === "edit" && selectClass) {
      setData({
        idUser: selectClass.idUser,
        idHours: selectClass.idHours,
        idTypeClass: selectClass.idTypeClass,
        parallel: selectClass.parallel,
        stateClass: selectClass.stateClass,
      });
    }
  }, [option, selectClass]);

  return (
    <div>
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
        <Form.Item label="Profesor">
          <SelectComponet
            list={selectStaff}
            handleChange={handleChange}
            flag="User"
            value={
              option === "edit"
                ? `${selectClass?.nameUser} ${selectClass?.lastNameUser}`
                : ""
            }
          />
        </Form.Item>

        <Form.Item label="Tipo de danza">
          <SelectComponet
            list={selectTypeClass}
            handleChange={handleChange}
            flag="TypeClass"
            value={option === "edit" ? selectClass?.nameClass : ""}
          />
        </Form.Item>

        <Form.Item label="Horario">
          <SelectComponet
            list={selectHour}
            handleChange={handleChange}
            flag="Hours"
            value={
              option === "edit"
                ? `${selectClass?.totalTime} hrs - ${
                    selectClass?.stateHours ? "Habilitado" : "Deshabilitado"
                  }`
                : ""
            }
          />
        </Form.Item>

        <Form.Item label="Paralelo">
          <InputComponent
            onChange={handleChange}
            name="parallel"
            placeholder="5TO-B"
            data={data.parallel}
          />
        </Form.Item>

        {option === "edit" && (
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
