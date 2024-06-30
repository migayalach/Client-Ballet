import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Tag,
  Button,
} from "antd";
import {
  keyParse,
  qualificationRoute,
  calculeNote,
  parseQualification,
  qualificatioNote,
} from "@/utils/funAuxQua";
import Text from "@/components/text/Text";

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
          rules={[{ required: true, message: `Por favor ingrese ${title}!` }]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

function TableNotes() {
  const qualification = useSelector(({ root }) => root?.qualification);
  const selectAuxParams = useSelector(({ root }) => root?.aux);
  const [form] = Form.useForm();
  const [data, setData] = useState([...qualification]);
  const [quaParams, setQuaParams] = useState([]);
  const [columns, setColumns] = useState([]);
  const [noteSuccess, setNoteSuccess] = useState(0);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

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
          selectAuxParams.params.map((param) => ({
            item: param.item,
            calification: Number(row[keyParse(param.item)] || 0),
          }))
        );
        newData.splice(index, 1, {
          ...item,
          ...row,
          note: updatedNote,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validación fallida:", errInfo);
    }
  };

  const onFinish = () => {

  };

  useEffect(() => {
    const data = parseQualification(qualification);
    const quaData = qualificationRoute(qualification[0]?.qualification);
    setQuaParams(Object.keys(quaData));
    setData(data);
  }, [qualification]);

  useEffect(() => {
    const cols = [
      { title: "N°", dataIndex: "number", width: "5%", editable: false },
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
    ];

    selectAuxParams.params?.forEach((param) => {
      cols.push({
        title: `${param.item} / ${param.calification}`,
        dataIndex: keyParse(param.item),
        key: keyParse(param.item),
        editable: true,
        width: "10%",
      });
    });

    cols.push(
      {
        title: "Observaciones",
        dataIndex: "observation",
        width: "20%",
        editable: true,
      },
      {
        title: "Nota",
        dataIndex: "note",
        width: "5%",
        editable: false,
        render: (note) => {
          let color = note >= noteSuccess ? "success" : "error";
          let text = note >= noteSuccess ? "Aprobado" : "Reprobado";
          return (
            <Tag color={color}>
              <p>{note}</p>
              <p>{text}</p>
            </Tag>
          );
        },
      },
      {
        title: "Operación",
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
                Guardar
              </Typography.Link>
              <Popconfirm title="¿Seguro de cancelar?" onConfirm={cancel}>
                <a>Cancelar</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Editar
            </Typography.Link>
          );
        },
      }
    );

    const mergedColumns = cols.map((col) => {
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

    setColumns(mergedColumns);
  }, [selectAuxParams, editingKey, quaParams]);

  useEffect(() => {
    const noteAprobation = qualificatioNote(selectAuxParams?.params);
    setNoteSuccess(noteAprobation);
  }, [selectAuxParams]);

  return (
    <div>
      <h3>Curso: {selectAuxParams?.parallel}</h3>
      <h4>Fecha: {selectAuxParams?.dateTest?.substring(0, 10)}</h4>
      <h4>Titulo: {selectAuxParams?.title}</h4>
      <Form form={form} component={false} onFinish={onFinish}>
        <Table
          components={{ body: { cell: EditableCell } }}
          bordered
          dataSource={data.map((record, index) => ({
            ...record,
            key: index,
          }))}
          columns={columns}
          pagination={false}
          rowClassName="editable-row"
        />
        <Button type="primary" htmlType="submit">
          <Text text="Subir notas" />
        </Button>
      </Form>
    </div>
  );
}

export default TableNotes;
