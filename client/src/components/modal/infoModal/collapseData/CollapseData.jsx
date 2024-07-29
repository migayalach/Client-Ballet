import React from "react";
import { Collapse } from "antd";
import {
  textInfoUser,
  textInfoTypeClass,
  textInfoClass,
  textInfoHours,
  textInfoQualification,
  textInformationAddStudent,
} from "../../optionMessage";

const mapList = (render, access) => {
  switch (render) {
    case "USER":
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoUser("search")}</p>,
          },
          {
            key: "2",
            label: "Crear/editar usuario",
            children: <p>{textInfoUser("newUser")}</p>,
          },
          {
            key: "3",
            label: "Eliminar usuario",
            children: <p>{textInfoUser("deleteUser")}</p>,
          },
          {
            key: "4",
            label: "Ver record academico del usuario",
            children: <p>{textInfoUser("viewRecordUser")}</p>,
          },
        ];
      } else return [];

    case "HOURS":
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoHours("search")}</p>,
          },
          {
            key: "2",
            label: "Crear/editar hora",
            children: <p>{textInfoHours("newOrUpdate")}</p>,
          },
          {
            key: "3",
            label: "Eliminar hora",
            children: <p>{textInfoHours("delete")}</p>,
          },
        ];
      } else if (access === "Profesor") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoHours("search")}</p>,
          },
        ];
      } else return [];

    case "TYPE-CLASS":
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoTypeClass("search")}</p>,
          },
          {
            key: "2",
            label: "Crear/editar clase",
            children: <p>{textInfoTypeClass("newOrUpdate")}</p>,
          },
          {
            key: "3",
            label: "Eliminar usuario clase",
            children: <p>{textInfoTypeClass("delete")}</p>,
          },
        ];
      } else if (access === "Profesor") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoTypeClass("search")}</p>,
          },
        ];
      } else return [];

    case "CLASS":
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoClass("search")}</p>,
          },
          {
            key: "2",
            label: "Crear/editar asignacion de clase",
            children: <p>{textInfoClass("newOrUpdate")}</p>,
          },
          {
            key: "3",
            label: "Eliminar clase asignada",
            children: <p>{textInfoClass("delete")}</p>,
          },
          {
            key: "4",
            label: "Ver listado de estudiantes de la clase asignada",
            children: <p>{textInfoClass("viewTeacher")}</p>,
          },
        ];
      } else if (access === "Profesor") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoClass("search")}</p>,
          },
        ];
      } else return [];

    case "CLASS-STUDENT":
      console.log(access);
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Inscribir nuevo alumno",
            children: <p>{textInformationAddStudent("add")}</p>,
          },
          {
            key: "2",
            label: "Cambio de estado del alumno en la clase",
            children: <p>{textInformationAddStudent("edit")}</p>,
          },
          {
            key: "3",
            label: "Eliminar alumno de la clase",
            children: <p>{textInformationAddStudent("delete")}</p>,
          },
        ];
      } else return [];

    case "QUALIFICATION":
      if (access === "Director" || access === "Secretaria") {
        return [
          {
            key: "1",
            label: "Descargar notas",
            children: <p>{textInfoQualification("download")}</p>,
          },
        ];
      } else if (access === "Profesor") {
        return [
          {
            key: "1",
            label: "Busqueda",
            children: <p>{textInfoQualification("search")}</p>,
          },
          {
            key: "2",
            label: "Nuevo examen",
            children: <p>{textInfoQualification("new")}</p>,
          },
          {
            key: "3",
            label: "Calificar estudiantes",
            children: <p>{textInfoQualification("qualification")}</p>,
          },
          {
            key: "4",
            label: "Descargar notas",
            children: <p>{textInfoQualification("download")}</p>,
          },
          {
            key: "5",
            label: "Eliminar examen",
            children: <p>{textInfoQualification("delete")}</p>,
          },
        ];
      } else return [];
  }
};

const CollapseData = ({ render, access }) => (
  <Collapse accordion items={mapList(render, access)} />
);

export default CollapseData;
