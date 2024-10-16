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
import {
  createTypeClass,
  getByIdTypeHour,
  editTypeHour,
} from "@/redux/actions";

// STYLESHEET'
import "./form-type-class.css";

// JAVASCRIP
import formTypeClassValidate from "./formTypeClassValidate";

function FormTypeClass({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const selectTypeHour = useSelector(({ root }) => root?.data);
  const selectState = useSelector(({ root }) => root?.state);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    nameClass: "",
    description: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setErrors(
      formTypeClassValidate({
        ...data,
        [event.target.name]: event.target.value,
      })
    );
  };

  const onFinish = () => {
    if (option === "editTypeClass") {
      dispatch(editTypeHour({ ...data, idTypeClass: idData }));
    } else {
      dispatch(createTypeClass(data));
    }
  };

  useEffect(() => {
    if (selectState === "create-typeClass") {
      setData({
        nameClass: "",
        description: "",
      });
      handleState();
    }
  }, [selectState]);

  useEffect(() => {
    idData && dispatch(getByIdTypeHour(idData));
  }, [idData]);

  useEffect(() => {
    if (option === "editTypeClass" && selectTypeHour) {
      setData({
        nameClass: selectTypeHour.nameClass,
        description: selectTypeHour.description,
      });
    }
  }, [option, selectTypeHour]);

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
          {errors.nameClass && (
            <p className="messageError">{errors.nameClass}</p>
          )}
        </Form.Item>
        <Form.Item label="Descripcion">
          <AreaText
            onChange={handleChange}
            name="description"
            placeholder="Este tipo de baile proviene de las villas ubicadas en argentina"
            value={data.description}
          />
        </Form.Item>

        {!Object.keys(errors).length && data.nameClass.length ? (
          <Button type="primary" htmlType="submit">
            <Text text="Crear" />
          </Button>
        ) : (
          ""
        )}
      </Form>
    </>
  );
}

export default FormTypeClass;
