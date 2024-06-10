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

// STYLESHEET'

// JAVASCRIP

function FormClassStudent({ handleState, idClass }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.user);
  const [data, setData] = useState({
    idClass: +idClass,
    idUser: 0,
    stateStudent: true,
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
      stateStudent: boolean,
    });
  };

  const onFinish = () => {
    dispatch(createClassStudent(data));
    setData({
      idClass: 0,
      idUser: 0,
      stateStudent: true,
    });
    handleState();
  };

  useEffect(() => {
    dispatch(getClassAll());
    dispatch(getUserAll());
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
      <Form.Item label="Selecciona un Alumno">
        {/* <SelectComponet
          list={selectUser}
          handleChange={handleChange}
          flag="User"
        /> */}
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
