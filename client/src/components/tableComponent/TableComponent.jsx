import React, { useEffect } from "react";
import { Table, Tag, Avatar, Button } from "antd";
import ButtonDelete from "@/components/button/buttonDelete/ButtonDelete";
import ButtonEdit from "@/components/button/buttonEdit/ButtonEdit";
import Link from "next/link";
import ButtonRenderId from "../button/buttonRenderId/ButtonRenderId";
import {
  EyeOutlined,
  SearchOutlined,
  DeleteOutlined,
  EditOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import ProfileAvatar from "../avatar/ProfileAvatar";
import { useDispatch } from "react-redux";
import { getByIdClass } from "@/redux/actions";

function TableComponent({ data, render, modal, handleDelete, handleUpdate }) {
  const dispatch = useDispatch();

  const select = (idData, name, flag) => {
    modal(idData, name, flag);
  };

  const dispatchIdEdit = (idData) => {
    dispatch(getByIdClass(idData));
  };

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
        <ButtonEdit
          idData={data.idTypeClass}
          text="Editar"
          render="TYPE-CLASS"
        />
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
    return data?.map(({ idTypeClass, nameClass, description }, index) => ({
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
      title: "Ver",
      key: "view",
      render: (data) => (
        <Link href={`/class/${data.idClass}`}>
          <EyeOutlined />
        </Link>
      ),
    },
    {
      title: "Editar",
      key: "action",
      render: (data) => (
        // <div onClick={() => dispatchIdEdit(data.idClass)}>
        <ButtonEdit idData={data.idClass} text="Editar" render="CLASS" />
        // </div>
        // <Button onClick={() => dispatchIdEdit(data.idClass)}>Editar</Button>
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

  const columsTeacher = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    {
      title: "Perfil",
      dataIndex: "photoUser",
      key: "photoUser",
      render: (photoUser) => <Avatar src={photoUser} />,
    },
    { title: "Nombre", dataIndex: "teacher", key: "teacher" },
    { title: "Carnet", dataIndex: "carnetUser", key: "carnetUser" },
    { title: "Extension", dataIndex: "department", key: "department" },
    {
      title: "Seleccionar",
      title: "action",
      key: "action",
      render: ({ idUser, teacher }) => (
        <a onClick={() => select(idUser, teacher, "USER")}>HOLIS</a>
      ),
    },
  ];

  const teacherMap = (data) => {
    return data?.map(
      (
        {
          idUser,
          nameLevel,
          nameUser,
          lastNameUser,
          carnetUser,
          department,
          photoUser,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idUser,
        nameLevel,
        teacher: `${nameUser} ${lastNameUser}`,
        carnetUser,
        department,
        photoUser,
      })
    );
  };

  const columnsTypeAllClass = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Clase", dataIndex: "nameClass", key: "nameClass" },
    {
      title: "Seleccionar",
      key: "action",
      render: ({ idTypeClass, nameClass }) => (
        <a onClick={() => select(idTypeClass, nameClass, "TYPE-CLASS")}>
          HOLIS
        </a>
      ),
    },
  ];

  const typeClassAllMap = (data) => {
    return data?.map(({ idTypeClass, nameClass, description }, index) => ({
      key: index,
      numberItem: index + 1,
      idTypeClass,
      nameClass,
    }));
  };

  const hoursAll = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Inicio", dataIndex: "startTime", key: "startTime" },
    { title: "Finalizacion", dataIndex: "endTime", key: "endTime" },
    { title: "Total tiempo", dataIndex: "totalTime", key: "totalTime" },
    {
      title: "Seleccionar",
      key: "action",
      render: ({ idHours, totalTime }) => (
        <a onClick={() => select(idHours, totalTime, "HOURS")}>HOLIS</a>
      ),
    },
  ];

  const hoursAllMap = (data) => {
    return data?.map(({ idHours, startTime, endTime, totalTime }, index) => ({
      key: index,
      numberItem: index + 1,
      idHours,
      startTime,
      endTime,
      totalTime,
    }));
  };

  const paramsCalification = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Parametro", dataIndex: "item", key: "item" },
    { title: "Puntos", dataIndex: "calification", key: "calification" },
    { title: "Detalle", dataIndex: "description", key: "description" },
    {
      title: "Editar",
      key: "action",
      render: (data) => (
        <EditOutlined onClick={() => handleUpdate(data.uuid)} />
      ),
    },
    {
      title: "Eliminar",
      key: "action",
      render: (data) => (
        <DeleteOutlined onClick={() => handleDelete(data.uuid)} />
      ),
    },
  ];

  const paramsCalificationMap = (data) => {
    return data?.map(({ uuid, item, calification, description }, index) => ({
      key: index,
      numberItem: index + 1,
      uuid,
      item,
      calification,
      description,
    }));
  };

  const qualificationParamsAll = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Fecha", dataIndex: "dateTest", key: "dateTest" },
    { title: "Curso", dataIndex: "parallel", key: "parallel" },
    { title: "Profesor", dataIndex: "teacher", key: "teacher" },
    { title: "Titulo", dataIndex: "title", key: "title" },
    { title: "Calificar" },
    { title: "Ver" },
    { title: "Imprimir", key: "action", render: () => <DownloadOutlined /> },
    { title: "Eliminar" },
  ];

  const qualificationParamasAllMap = (data) => {
    return data?.map(
      (
        {
          idParams,
          idClass,
          parallel,
          nameUser,
          lastNameUser,
          dateTest,
          title,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        dateTest: dateTest.substring(0, 10),
        parallel,
        teacher: `${nameUser} ${lastNameUser}`,
        title,
      })
    );
  };

  const classIdUser = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Clase", dataIndex: "nameClass", key: "nameClass" },
    { title: "Paralelo", dataIndex: "parallel", key: "parallel" },
    { title: "Tiempo", dataIndex: "totalTime", key: "totalTime" },
    {
      title: "Seleccionar",
      key: "action",
      render: ({ idClass, parallel }) => (
        <a onClick={() => select(idClass, parallel, "IDCLASS-ALL")}>XXX</a>
      ),
    },
  ];

  const classIdUserMap = (data) => {
    return data?.map(
      (
        {
          idClass,
          idHours,
          idTypeClass,
          nameClass,
          parallel,
          totalTime,
          stateClass,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idClass,
        idHours,
        idTypeClass,
        nameClass,
        parallel,
        totalTime,
        stateClass,
      })
    );
  };

  const studentAll = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    {
      title: "Perfil",
      dataIndex: "photoUser",
      key: "photoUser",
      render: (photoUser) => <Avatar src={photoUser} />,
    },
    { title: "Nombre", dataIndex: "name", key: "name" },
    { title: "Carner", dataIndex: "carnet", key: "carnet" },
    {
      title: "Seleccionar",
      key: "action",
      render: ({ idUser, name, carnet }) => (
        <a onClick={() => select(idUser, name, "STUDENT-ALL")}>:D</a>
      ),
    },
  ];

  const studentAllMap = (data) => {
    return data?.map(
      (
        { idUser, nameUser, lastNameUser, carnetUser, department, photoUser },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idUser,
        name: `${nameUser} ${lastNameUser}`,
        carnet: `${carnetUser} ${department}`,
        photoUser,
      })
    );
  };

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
      {render === "TEACHER" && (
        <Table
          columns={columsTeacher}
          dataSource={teacherMap(data)}
          pagination={false}
        />
      )}
      {render === "TYPE-CLASS-ALL" && (
        <Table
          columns={columnsTypeAllClass}
          dataSource={typeClassAllMap(data)}
          pagination={false}
        />
      )}
      {render === "HOURS-ALL" && (
        <Table
          columns={hoursAll}
          dataSource={hoursAllMap(data)}
          pagination={false}
        />
      )}
      {render === "FORM-PARAM-CALIFICATION" && (
        <Table
          columns={paramsCalification}
          dataSource={paramsCalificationMap(data)}
          pagination={false}
        />
      )}
      {render === "QUALIFICATION-ALL" && (
        <Table
          columns={qualificationParamsAll}
          dataSource={qualificationParamasAllMap(data)}
          pagination={false}
        />
      )}
      {render === "IDUSER-CLASSALL" && (
        <Table
          columns={classIdUser}
          dataSource={classIdUserMap(data)}
          pagination={false}
        />
      )}
      {render === "STUDENT-ALL" && (
        <Table
          columns={studentAll}
          dataSource={studentAllMap(data)}
          pagination={false}
        />
      )}
    </div>
  );
}

export default TableComponent;
