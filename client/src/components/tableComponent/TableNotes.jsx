"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import { keyParse, qualificationRoute, calculeNote } from "@/utils/funAuxQua";

const originData = [];

const addData = (qualification) => {
  for (let i = 0; i < qualification.length; i++) {
    originData.push({
      key: i,
      number: i + 1,
      idParams: qualification[i].idParams,
      idUser: qualification[i].idUser,
      nameUser: qualification[i].nameUser,
      lastNameUser: qualification[i].lastNameUser,
      carnetUser: qualification[i].carnetUser,
      department: qualification[i].department,
      ...qualificationRoute(qualification[i].qualification),
      observation: qualification[i].observation,
      note: qualification[i].note,
    });
  }
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[{ required: true, message: `Please Input ${title}!` }]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function TableNotes({ paramsQualification, qualificationList }) {
  console.log(paramsQualification);
  const paramsAux = [params];
  addData(qualificationList);

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const [quaParams, setQuaParams] = useState([]);

  const isEditing = (record) => record.key === editingKey;

  const qualificationCasting = (data) => {
    const result = data.map(({ item }) => keyParse(item));
    setQuaParams([...result]);
  };

  const currentSelect = (data) => {
    const objQua = {};
    for (let i in data) {
      for (let j = 0; j < quaParams.length; j++) {
        if (quaParams[j] === i) {
          objQua[i] = 0;
        }
      }
    }
    return objQua;
  };

  const edit = (record) => {
    const dataQua = currentSelect(record);
    form.setFieldsValue({
      observation: "",
      ...dataQua,
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        // Calcular la nota actualizada
        const updatedNote = calculeNote(
          paramsAux.map((param) => ({
            item: param.item,
            calification: Number(row[keyParse(param.item)] || 0),
          }))
        );
        newData.splice(index, 1, {
          ...item,
          ...row,
          note: updatedNote, // Actualizamos la nota calculada
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    { title: "N°", dataIndex: "number", width: "5%", editable: false },
    { title: "Nombre", dataIndex: "nameUser", width: "10%", editable: false },
    {
      title: "Apellidos",
      dataIndex: "lastNameUser",
      width: "10%",
      editable: false,
    },
    { title: "Carnet", dataIndex: "carnetUser", width: "5%", editable: false },
  ];

  for (let i = 0; i < paramsAux.length; i++) {
    columns.push({
      title: `${paramsAux[i].item} / ${paramsAux[i].calification}`,
      dataIndex: keyParse(paramsAux[i].item),
      key: keyParse(paramsAux[i].item),
      editable: true,
      width: "10%",
    });
  }

  columns.push(
    {
      title: "Observaciones",
      dataIndex: "observation",
      width: "20%",
      editable: true,
    },
    { title: "Nota", dataIndex: "note", width: "5%", editable: false },
    {
      title: "Operacion",
      dataIndex: "operation",
      width: "9%",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    }
  );

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "note" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  useEffect(() => {
    if (data.length > 0) {
      qualificationCasting(qualification[0].qualification);
    }
  }, [data]);

  return (
    <Form form={form} component={false}>
      <Table
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        pagination={false}
        rowClassName="editable-row"
      />
    </Form>
  );
}

export default TableNotes;
