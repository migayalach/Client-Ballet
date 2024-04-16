import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Switch, Upload } from "antd";
import { getExtensionAll, getLevelAll } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";

const { TextArea } = Input;

const normFile = (event) => {
  if (Array.isArray(event)) {
    return event;
  }
  return event?.fileList;
};

function FormComponet() {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);

  const [data, setData] = useState({
    idLevel: 0,
    idExtension: 0,
    nameStaff: "",
    lastNameStaff: "",
    emailStaff: "",
    addressStaff: "",
    dateBirthStaff: "",
    carnetStaff: 0,
    photoStaff: "",
    stateStaff: false,
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(getExtensionAll());
    dispatch(getLevelAll());
  }, []);

  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Nombres">
          <Input />
        </Form.Item>
        <Form.Item label="Apellidos">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Carnet">
          <Input />
        </Form.Item>

        <Form.Item label="Extension">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Nivel">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Fecha de nacimiento">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Dirección">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Estado" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item
          label="Foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              />
            </button>
          </Upload>
        </Form.Item>
      </Form>
    </>
  );
}

export default FormComponet;
