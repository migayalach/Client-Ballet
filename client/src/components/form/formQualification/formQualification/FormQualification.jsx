import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import ListQualification from "../listQualifaction/ListQualification";
import InputComponent from "@/components/inputComponent/InputComponent";
import Text from "@/components/text/Text";
import { Button, Form } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function FormQualification() {
  const [list, setList] = useState([]);
  const [data, setData] = useState({ uuid: 0, item: "" });

  const handleChange = (event) => {
    setData({ item: event.target.value });
  };

  const handleUpdate = (idItem) => {
    console.log("EDITAR:::" + idItem);
  };

  const handleDelete = (idItem) => {
    console.log("ELIMINAR:::" + idItem);
    const listFilter = list.filter((index) => index.uuid === idItem);
    console.log(listFilter);
    setList([...listFilter]);
  };

  const onFinish = () => {
    const newItem = {
      ...data,
      uuid: uuidv4(),
    };
    setList([...list, newItem]);
    setData({
      uuid: 0,
      item: "",
    });
  };

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
        <Form.Item label="Nombre">
          <InputComponent
            onChange={handleChange}
            name="item"
            placeholder="Posicion de pies"
            data={data.item}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
      {/* <ListQualification item={data} /> */}
      <div>
        {list.map(({ uuid, item }) => (
          <div key={uuid} style={{ border: "2px solid black", padding: "3px" }}>
            <span>{uuid}</span> - <span>{item}</span>
            <EditOutlined onClick={() => handleUpdate(uuid)} />
            <DeleteOutlined onClick={() => handleDelete(uuid)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormQualification;
