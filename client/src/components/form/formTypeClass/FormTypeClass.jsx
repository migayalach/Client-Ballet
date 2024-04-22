// COMPONET'S
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";
import InputComponent from "@/components/inputComponent/InputComponent";
import AreaText from "@/components/areaText/AreaText";

//REDUX
import { createTypeClass } from "@/redux/actions";

// STYLESHEET'

// JAVASCRIP

function FormTypeClass({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    nameClass: "",
    description: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    dispatch(createTypeClass(data));
    setData({
      nameClass: "",
      description: "",
    });
    handleState();
  };

  return (
    <>
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
        <Form.Item label="Nombre">
          <InputComponent
            onChange={handleChange}
            name="nameClass"
            placeholder="Cumbia"
            data={data.nameClass}
          />
        </Form.Item>
        <Form.Item label="Descripcion">
          <AreaText
            onChange={handleChange}
            name="description"
            placeholder="Este tipo de baile proviene de las villas ubicadas en argentina"
            value={data.description}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
    </>
  );
}

export default FormTypeClass;
