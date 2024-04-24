import React from "react";
import { Table, Tag } from "antd";
import ButtonDelete from "@/components/button/buttonDelete/ButtonDelete";
import ButtonEdit from "@/components/button/buttonEdit/ButtonEdit";

const columns = [
  {
    title: "N°",
    dataIndex: "numberItem",
    key: "numberItem",
  },
  {
    title: "Nombre",
    dataIndex: "nameClass",
    key: "nameClass",
  },
  {
    title: "Descripcion",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Editar",
    key: "action",
    render: (data) => (
      <ButtonEdit idData={data.idTypeClass} text="Editar" render="TYPE-CLASS" />
    ),
  },
  {
    title: "Eliminar",
    key: "action",
    render: (data) => (
      <ButtonDelete
        idData={data.idTypeClass}
        text="Eliminar"
        render="TYPE-CLASS"
      />
    ),
  },
];

const dataMap = (data) => {
  return data.map(({ idTypeClass, nameClass, description }, index) => ({
    key: index,
    idTypeClass,
    numberItem: index + 1,
    nameClass,
    description,
  }));
};

const columsClass = [
  {
    title: "N°",
    dataIndex: "numberItem",
    key: "numberItem",
  },
  { title: "Tipo de clase", dataIndex: "nameClass", key: "nameClass" },
  {
    title: "Profesor",
    dataIndex: "teacher",
    key: "teacher",
  },
  {
    title: "Carnet",
    dataIndex: "carnetStaff",
    key: "carnetStaff",
  },
  {
    title: "Extension",
    dataIndex: "department",
    key: "department",
  },
  { title: "Paralelo", dataIndex: "parallel", key: "parallel" },
  {
    title: "Estado",
    dataIndex: "stateClass",
    key: "stateClass",
    render: (stateClass) => {
      let color = stateClass ? "green" : "volcano";
      let text = stateClass ? "Habilidato" : "Deshabilitado";
      return <Tag color={color}>{text}</Tag>;
    },
  },
  { title: "Duración", dataIndex: "totalTime", key: "totalTime" },
  {
    title: "Editar",
    key: "action",
    render: (data) => (
      <ButtonEdit idData={data.idClass} text="Editar" render="CLASS" />
    ),
  },
  {
    title: "Eliminar",
    key: "action",
    render: (data) => (
      <ButtonDelete idData={data.idClass} text="Eliminar" render="CLASS" />
    ),
  },
];

const classMap = (data) => {
  return data?.map(
    (
      {
        idClass,
        nameClass,
        nameStaff,
        lastNameStaff,
        carnetStaff,
        department,
        parallel,
        stateClass,
        totalTime,
      },
      index
    ) => ({
      key: index,
      idClass,
      numberItem: index + 1,
      nameClass,
      teacher: `${nameStaff} ${lastNameStaff}`,
      carnetStaff,
      department,
      parallel,
      stateClass,
      totalTime: `${totalTime} hrs`,
    })
  );
};

function TableComponent({ data, render }) {
  return (
    <div>
      {render === "TYPE-CLASS" && (
        <Table
          columns={columns}
          dataSource={dataMap(data)}
          pagination={false}
        />
      )}
      {render === "CLASS" && (
        <Table
          columns={columsClass}
          dataSource={classMap(data)}
          pagination={false}
        />
      )}
    </div>
  );
}

export default TableComponent;
