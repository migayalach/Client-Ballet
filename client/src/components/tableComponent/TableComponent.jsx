import React from "react";
import { Table, Tag, Avatar } from "antd";
import ButtonDelete from "@/components/button/buttonDelete/ButtonDelete";
import ButtonEdit from "@/components/button/buttonEdit/ButtonEdit";
import ContactModal from "../modal/contactModal/ContactModal";
import Link from "next/link";
import {
  EyeOutlined,
  DeleteOutlined,
  DownloadOutlined,
  ContainerOutlined,
  EditOutlined,
  ReconciliationOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

function TableComponent({
  data,
  render,
  modal,
  handleDelete,
  handleUpdate,
  handleNoteUser,
  access,
  handleFlagClass,
  saveLocalStorage,
  download,
}) {
  const select = (idData, name, flag) => {
    modal(idData, name, flag);
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
    ...(access === "Director" || access === "Secretaria"
      ? [
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
        ]
      : []),
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
      title: "Asistencia",
      key: "action",
      render: (data) => (
        <Link
          href={`/class/assistance`}
          onClick={() => handleFlagClass(data.idClass)}
        >
          <ReconciliationOutlined />
        </Link>
      ),
    },
    {
      title: "Calificaciones",
      key: "action",
      render: (data) => (
        <Link
          onClick={() => saveLocalStorage(data.idClass)}
          href={`/class/qualification`}
        >
          <FolderOpenOutlined />
        </Link>
      ),
    },
    {
      title: "Descargar",
      key: "download",
      render: ({ idClass }) => (
        <a onClick={() => download(idClass)}>
          <DownloadOutlined />
        </a>
      ),
    },
    {
      title: "Ver",
      key: "view",
      render: (data) => (
        <Link href={`/class/${data.idClass}`}>
          <EyeOutlined />
        </Link>
      ),
    },
    ...(access === "Secretaria" || access === "Director"
      ? [
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
              <ButtonDelete
                idData={data.idClass}
                text="Eliminar"
                render="CLASS"
              />
            ),
          },
        ]
      : []),
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

    ...(access === "Secretaria" || access === "Director"
      ? [
          {
            title: "Editar",
            key: "edit",
            render: (data) => (
              <ButtonEdit idData={data.idHours} text="Editar" render="HOURS" />
            ),
          },
          {
            title: "Eliminar",
            key: "delete",
            render: (data) => (
              <ButtonDelete
                idData={data.idHours}
                text="Eliminar"
                render="HOURS"
              />
            ),
          },
        ]
      : []),
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
    {
      title: "Seleccionar",
      title: "action",
      key: "action",
      render: ({ idUser, teacher }) => (
        <a onClick={() => select(idUser, teacher, "USER")}>Seleccionar</a>
      ),
    },
  ];

  const teacherMap = (data) => {
    return data?.map(
      (
        { idUser, nameLevel, nameUser, lastNameUser, carnetUser, photoUser },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idUser,
        nameLevel,
        teacher: `${nameUser} ${lastNameUser}`,
        carnetUser,
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
          Seleccionar
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
        <a onClick={() => select(idHours, totalTime, "HOURS")}>Seleccionar</a>
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
    { title: "Titulo", dataIndex: "title", key: "title" },
    { title: "Promedio", dataIndex: "noteFinish", key: "noteFinish" },
    // ...(access === "Profesor"
    // ? [
    {
      title: "Calificar",
      key: "action",
      render: (data) => (
        <Link href={`/class/qualification/${data.idParams}`}>
          <ContainerOutlined />
        </Link>
      ),
    },
    // ]
    // : []),
    {
      title: "Imprimir",
      key: "download",
      render: ({ idClass, idParams }) => (
        <a onClick={() => download(idClass, idParams)}>
          <DownloadOutlined />
        </a>
      ),
    },
    // ...(access === "Profesor"
    //   ? [
    {
      title: "Editar",
      key: "action",
      render: (data) => (
        <ButtonEdit
          idData={data.idParams}
          text="Editar"
          render="QUALIFICATION"
        />
      ),
    },
    {
      title: "Eliminar",
      key: "action",
      render: (data) => (
        <ButtonDelete idData={data.idParams} text="Editar" render="PARAMS" />
      ),
    },
    // ]
    // : []),
  ];

  const qualificationParamasAllMap = (data) => {
    return data?.map(
      ({ idParams, idClass, dateTest, title, noteFinish }, index) => ({
        key: index,
        numberItem: index + 1,
        idParams,
        idClass,
        dateTest: dateTest.substring(0, 10),
        title,
        noteFinish,
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
        <a onClick={() => select(idUser, name, "STUDENT-ALL")}>Elejir</a>
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
        carnet: `${carnetUser}`,
        photoUser,
      })
    );
  };

  const qualificationUsers = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Nombre", dataIndex: "name", key: "name" },
    { title: "Carnet", dataIndex: "carnet", key: "carnet" },
    { title: "Promedio", dataIndex: "note", key: "note" },
    {
      title: "Calificar",
      key: "qualification",
      render: ({
        idParams,
        idUser,
        numberItem,
        name,
        carnet,
        note,
        qualification,
      }) => (
        <a
          onClick={() =>
            handleNoteUser(
              idParams,
              idUser,
              numberItem,
              name,
              carnet,
              note,
              qualification
            )
          }
        >
          <ReconciliationOutlined />
        </a>
      ),
    },
  ];

  const qualificationUserMap = (data) => {
    return data?.map(
      (
        {
          idParams,
          idUser,
          nameUser,
          lastNameUser,
          carnetUser,
          department,
          note,
          qualification,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        name: `${nameUser} ${lastNameUser}`,
        carnet: `${carnetUser} ${department}`,
        note,
        qualification,
        idParams,
        idUser,
      })
    );
  };

  const assistanceList = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Fecha", dataIndex: "dateAssistance", key: "dateAssistance" },
    {
      title: "Registrar",
      key: "register",
      render: ({ idAssistance }) => (
        <Link href={`/class/assistance/${idAssistance}`}>
          <ReconciliationOutlined />
        </Link>
      ),
    },
    {
      title: "Descargar",
      key: "download",
      render: ({ idClass, idAssistance }) => (
        <a onClick={() => download(idClass, idAssistance)}>
          <DownloadOutlined />
        </a>
      ),
    },
    {
      title: "Eliminar",
      key: "delete",
      render: ({ idClass, idAssistance }) => (
        <a onClick={() => handleDelete(idClass, idAssistance)}>
          <DeleteOutlined />
        </a>
      ),
    },
  ];

  const assistanceListMap = (data) => {
    return data?.map(({ idAssistance, idClass, dateAssistance }, index) => ({
      key: index,
      numberItem: index + 1,
      idAssistance,
      idClass,
      dateAssistance: dateAssistance.substring(0, 10),
    }));
  };

  const contactList = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    { title: "Fecha", dataIndex: "dateContact", key: "dateContact" },
    { title: "Correo", dataIndex: "emailContact", key: "emailContact" },
    { title: "Nombre", dataIndex: "nameContact", key: "nameContact" },
    { title: "Celular", dataIndex: "phoneContact", key: "phoneContact" },
    {
      title: "Estado",
      dataIndex: "stateContact",
      key: "stateContact",
      render: (stateContact) => {
        let color = stateContact ? "green" : "volcano";
        let text = stateContact ? "Se contactado" : "No se contactado";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Ver",
      key: "action",
      render: ({ idContact }) => <ContactModal contact={idContact} />,
    },
  ];

  const contactListMap = (data) => {
    return data?.map(
      (
        {
          idContact,
          dateContact,
          emailContact,
          nameContact,
          feedback,
          phoneContact,
          stateContact,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idContact,
        dateContact: dateContact.substring(0, 10),
        emailContact,
        nameContact,
        phoneContact,
        feedback,
        stateContact,
      })
    );
  };

  const listStudentsClass = [
    { title: "N°", dataIndex: "numberItem", key: "numberItem" },
    {
      title: "Usuario",
      dataIndex: "photoUser",
      key: "photoUser",
      render: (photoUser) => <Avatar src={photoUser} />,
    },
    {
      title: "Estudiante",
      dataIndex: "student",
      key: "student",
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
    {
      title: "Estado",
      dataIndex: "stateUser",
      key: "stateUser",
      render: (stateUser) => {
        let color = stateUser ? "green" : "volcano";
        let text = stateUser ? "Habilidato" : "Deshabilitado";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    ...(access === "Director" || access === "Secretaria"
      ? [
          {
            title: "Hab / Des",
            key: "update",
            render: ({ idClass, idUser }) => (
              <a onClick={() => handleUpdate(idClass, idUser)}>
                <EditOutlined />
              </a>
            ),
          },
          {
            title: "Eliminar",
            key: "delete",
            render: ({ idClass, idUser }) => (
              <a onClick={() => handleDelete(idClass, idUser)}>
                <DeleteOutlined />
              </a>
            ),
          },
        ]
      : []),
  ];

  const listStudentsClassMap = (data) => {
    return data.map(
      (
        {
          idUser,
          idClass,
          nameUser,
          lastNameUser,
          carnetUser,
          department,
          photoUser,
          stateUser,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        idClass,
        idUser,
        idUser,
        idClass,
        idUser,
        idClass,
        student: `${nameUser} ${lastNameUser}`,
        carnetUser,
        department,
        photoUser,
        stateUser,
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
      {render === "QUALIFICATION-USER" && (
        <Table
          columns={qualificationUsers}
          dataSource={qualificationUserMap(data)}
          pagination={false}
        />
      )}
      {render === "LIST-ASSISTANCE-IDCLASS" && (
        <Table
          columns={assistanceList}
          dataSource={assistanceListMap(data)}
          pagination={false}
        />
      )}
      {render === "CONTACT" && (
        <Table
          columns={contactList}
          dataSource={contactListMap(data)}
          pagination={false}
        />
      )}
      {render === "LIST-STUDENT-CLASS" && (
        <Table
          columns={listStudentsClass}
          dataSource={listStudentsClassMap(data)}
          pagination={false}
        />
      )}
    </div>
  );
}

export default TableComponent;
