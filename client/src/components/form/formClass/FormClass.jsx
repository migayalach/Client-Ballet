// COMPONET'S
import InputComponent from "@/components/inputComponent/InputComponent";
import SelectComponet from "@/components/select/SelectComponet";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import {
  getHoursAll,
  getUserAll,
  getTypeClassAll,
  createClass,
  getByIdClass,
} from "@/redux/actions";
import Text from "@/components/text/Text";
import State from "@/components/state/State";

// STYLESHEET'

// JAVASCRIP

function FormClass({ idData, option }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.user);
  const selectHour = useSelector(({ root }) => root?.hours);
  const selectTypeClass = useSelector(({ root }) => root?.typeClass);
  const selectClass = useSelector(({ root }) => root?.data);
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
    } else {
      dispatch(createClass(data));
      setData({
        idUser: 0,
        idHours: 0,
        idTypeClass: 0,
        parallel: "",
        stateClass: true,
      });
    }
  };

  useEffect(() => {
    if (option === "edit") {
      dispatch(getByIdClass(idData));
      setData({
        idUser: selectClass?.idUser,
        idHours: selectClass?.idHours,
        idTypeClass: selectClass?.idTypeClass,
        parallel: selectClass?.parallel,
        stateClass: selectClass?.stateClass,
      });
    }
  }, [option, idData]);

  useEffect(() => {
    dispatch(getHoursAll());
    dispatch(getUserAll());
    dispatch(getTypeClassAll());
  }, []);

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
            list={selectUser}
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
            data={selectClass?.parallel}
          />
        </Form.Item>

        {option === "edit" && (
          <Form.Item label="Estado de clase">
            <State
              stateHours={selectClass?.stateClass}
              handleChange={onChangeState}
            />
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
