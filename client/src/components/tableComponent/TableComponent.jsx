import React from "react";
import { Table, Tag } from "antd";
import ButtonDelete from "@/components/button/buttonDelete/ButtonDelete";
import ButtonEdit from "@/components/button/buttonEdit/ButtonEdit";
import Link from "next/link";
import ButtonRenderId from "../button/buttonRenderId/ButtonRenderId";

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
    dataIndex: "carnetUser",
    key: "carnetUser",
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
    title: "Inscribir",
    key: "inscribir",
    render: (data) => <Link href={`/class/${data.idClass}`}>+</Link>,
  },
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
        nameUser,
        lastNameUser,
        carnetUser,
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
      teacher: `${nameUser} ${lastNameUser}`,
      carnetUser,
      department,
      parallel,
      stateClass,
      totalTime: `${totalTime} hrs`,
    })
  );
};

const columsHours = [
  { title: "N°", dataIndex: "numberItem", key: "numberItem" },
  { title: "Inicio", dataIndex: "startTime", key: "startTime" },
  { title: "Final", dataIndex: "endTime", key: "endTime" },
  { title: "Duracion", dataIndex: "totalTime", key: "totalTime" },
  {
    title: "Estado",
    dataIndex: "stateHours",
    key: "stateHours",
    render: (stateHours) => {
      let color = stateHours ? "green" : "volcano";
      let text = stateHours ? "Habilidato" : "Deshabilitado";
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: "Editar",
    key: "action",
    render: (data) => (
      <ButtonEdit idData={data.idHours} text="Editar" render="HOURS" />
    ),
  },
  {
    title: "Eliminar",
    key: "action",
    render: (data) => (
      <ButtonDelete idData={data.idHours} text="Eliminar" render="HOURS" />
    ),
  },
];

const hoursMap = (data) => {
  return data?.map(
    ({ idHours, startTime, endTime, totalTime, stateHours }, index) => ({
      key: index,
      numberItem: index + 1,
      idHours,
      startTime,
      endTime,
      totalTime,
      stateHours,
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
      {render === "HOURS" && (
        <Table
          columns={columsHours}
          dataSource={hoursMap(data)}
          pagination={false}
        />
      )}
    </div>
  );
}

export default TableComponent;
