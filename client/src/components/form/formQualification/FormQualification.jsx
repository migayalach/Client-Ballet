import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import InputComponent from "@/components/inputComponent/InputComponent";
import Text from "@/components/text/Text";
import { Button, Form } from "antd";
import TableComponent from "@/components/tableComponent/TableComponent";
import AreaText from "@/components/areaText/AreaText";

function FormQualification() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [data, setData] = useState({
    uuid: "",
    item: "",
    calification: 0,
    description: "",
  });
  const [flag, setFlag] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const handleUpdate = (idItem) => {
    const aux = list.find((index) => index.uuid === idItem);
    setData({
      uuid: aux.uuid,
      item: aux.item,
      calification: aux.calification,
      description: aux.description,
    });
    setUpdate(true);
  };

  const handleDelete = (idItem) => {
    const aux = list.filter((index) => index.uuid !== idItem);
    setList([...aux]);
  };

  const onFinish = () => {
    if (!update) {
      data.uuid = uuidv4();
      setList([...list, data]);
    } else {
      const index = list.findIndex((element) => element.uuid === data.uuid);
      list[index] = data;
      setUpdate(false);
    }
    setFlag(true);
  };

  const handleSubmitCalification = () => {
    alert("holis");
  };

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setData({
          uuid: 0,
          item: "",
          calification: 0,
          description: "",
        });
        setFlag(false);
      }, 400);
    }
  }, [flag]);

  return (
    <div>
      <div>
        <Text text="Titulo" />
        <InputComponent
          onChange={handleChange}
          name="title"
          placeholder="Primer parcial"
          data={title}
        />
      </div>

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
          <Form.Item label="Parametro">
            <InputComponent
              onChange={handleChange}
              name="item"
              placeholder="Posicion de pies"
              data={data.item}
            />
          </Form.Item>

          <Form.Item label="Calificación">
            <InputComponent
              onChange={handleChange}
              name="calification"
              placeholder="20 Pts"
              data={data.calification}
            />
          </Form.Item>

          <Form.Item label="Descripcion">
            <AreaText
              onChange={handleChange}
              name="description"
              placeholder="Calificacion de calificación"
              value={data.description}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            <Text text="Crear parametro" />
          </Button>
        </Form>
      </div>

      <div>
        <TableComponent
          data={list}
          render="FORM-PARAM-CALIFICATION"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>

      <Button type="primary" onClick={handleSubmitCalification}>
        <Text text="Calificar" />
      </Button>
    </div>
  );
}

export default FormQualification;
