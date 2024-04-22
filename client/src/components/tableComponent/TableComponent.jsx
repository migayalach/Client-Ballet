import React from "react";
import { Table } from "antd";
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
    render: () => <ButtonEdit />,
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

function TableComponent({ data, render }) {
  return (
    <div>
      <Table columns={columns} dataSource={dataMap(data)} pagination={false} />
    </div>
  );
}

export default TableComponent;
