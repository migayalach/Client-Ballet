// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import InputComponent from "@/components/inputComponent/InputComponent";
import DateComponent from "@/components/date/DateComponent";
import AreaText from "@/components/areaText/AreaText";
import State from "@/components/state/State";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import {
  getExtensionAll,
  createStudent,
  editStudent,
  getByIdStudent,
  getStaffAll,
} from "@/redux/actions";

// STYLESHEET'

// JAVASCRIP

function FormStudent({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.student);
  const [data, setData] = useState({
    idClass: 0,
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
    if (option === "edit") {
      // dispatch(editStudent({ ...data, idStudent: idData }));
    } else {
      dispatch(createStudent(data));
      setData({
        idClass: 0,
        idUser: 0,
        stateStudent: false,
      });
      handleState();
    }
  };

  useEffect(() => {
    dispatch(getStaffAll());
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
      <Form.Item label="Elija una usuario">
        {/* <SelectComponet
          list={selectExtension}
          handleChange={handleChange}
          flag="Extension"
          value={option === "edit" ? selectIdStudent?.department : ""}
        /> */}
      </Form.Item>

      {option === "edit" && (
        <Form.Item label="Estado">
          <State stateHours={data.stateStudent} handleChange={onChangeState} />
        </Form.Item>
      )}

      <Button type="primary" htmlType="submit">
        <Text text="Crear" />
      </Button>
    </Form>
  );
}

export default FormStudent;
