import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Checkbox, Table, Button, Tag } from "antd";
import Text from "@/components/text/Text";
import { postListAttendance, removeError } from "@/redux/actions";

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
  const inputNode =
    inputType === "checkbox" ? (
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        valuePropName="checked"
        initialValue={record[dataIndex]}
      >
        <Checkbox />
      </Form.Item>
    ) : null;

  return <td {...restProps}>{editing ? inputNode : children}</td>;
};

function TableAssistance({ list, attendance }) {
  const selectError = useSelector(({ root }) => root?.error);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const onFinish = () => {
    const arrayData = data.map((item) => ({
      ...item,
      assistance: item.assistance === 1 ? 1 : 0,
    }));
    dispatch(postListAttendance({ idAssistance: attendance, list: arrayData }));
  };

  useEffect(() => {
    setData([...list.map((item, index) => ({ ...item, key: index }))]);
  }, [list]);

  useEffect(() => {
    const cols = [
      {
        title: "N°",
        dataIndex: "number",
        width: "5%",
        editable: false,
        render: (_, __, index) => index + 1,
      },
      { title: "Nombre", dataIndex: "nameUser", width: "10%", editable: false },
      {
        title: "Apellidos",
        dataIndex: "lastNameUser",
        width: "10%",
        editable: false,
      },
      {
        title: "Carnet",
        dataIndex: "carnetUser",
        width: "5%",
        editable: false,
      },
      {
        title: "Asistencia",
        dataIndex: "assistance",
        width: "5%",
        editable: true,
        render: (_, record) => (
          <Checkbox
            checked={record.assistance === 1}
            onChange={(e) => {
              const newData = [...data];
              const index = newData.findIndex(
                (item) => item.key === record.key
              );
              if (index > -1) {
                newData[index] = {
                  ...newData[index],
                  assistance: e.target.checked ? 1 : 0,
                };
                setData(newData);
              }
            }}
          />
        ),
      },
      {
        title: "Estado",
        dataIndex: "assistance",
        width: "5%",
        editable: false,
        render: (assistance) => {
          let color = assistance === 1 ? "success" : "error";
          let text = assistance === 1 ? "Asistio" : "Falta";
          return (
            <Tag color={color}>
              <p>{text}</p>
            </Tag>
          );
        },
      },
    ];

    const mergedColumns = cols.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: col.dataIndex === "assistance" ? "checkbox" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });

    setColumns(mergedColumns);
  }, [editingKey, data]);

  // useEffect(() => {
  //   if (selectError?.error.length) {
  //     dispatch(removeError());
  //   }
  // }, [selectError]);

  return (
    <div>
      <h1>Registro de Asistencia</h1>
      <Form form={form} component={false}>
        <Table
          components={{ body: { cell: EditableCell } }}
          bordered
          dataSource={data}
          columns={columns}
          pagination={{
            pageSize: 10,
          }}
          rowClassName="editable-row"
        />
        <Button type="primary" onClick={onFinish}>
          <Text text="Subir asistencia" />
        </Button>
      </Form>
    </div>
  );
}

export default TableAssistance;
