"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import Page404 from "@/components/pageResult/Page404";
import Loading from "@/components/pageResult/Loading";
import TableComponent from "@/components/tableComponent/TableComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Notification from "@/components/modal/notification/Notification";
import ListStudentClass from "@/components/filters/listStudentClass/ListStudentClass";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getIdAllClassStudent, studentClear } from "@/redux/actions";

// STYLESHEET'

function ClassParams({ params }) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectClassStudent = useSelector(({ root }) => root?.student);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectUser = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  if (Object.keys(selectUser).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  useEffect(() => {
    localStorage.setItem("classListStudent", params?.idClass);
    dispatch(getIdAllClassStudent(params?.idClass));
    return () => {
      dispatch(studentClear());
      localStorage.removeItem("classListStudent");
    };
  }, []);

  useEffect(() => {
    if (selectState === "registration-success") {
      setDataState({
        action: "registration-success",
        state: "success",
        message: "Alumno inscrito con exito a la clase.",
      });
    }
    // else if (selectState === "edit-class") {
    //   setDataState({
    //     action: "edit-class",
    //     state: "success",
    //     message: "Se actualizo la clase con exito",
    //   });
    // } else if (selectState === "delete-class") {
    //   setDataState({
    //     action: "delete-class",
    //     state: "success",
    //     message: "Clase eliminada con exito",
    //   });
    // }
    else if (
      selectError?.error === "Este alumno ya esta registrado en esta clase"
    ) {
      setDataState({
        action: "registration-error",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

  return (
    <div>
      <h3>Lista de estudiantes</h3>

      <div>
        <ListStudentClass idClass={params.idClass} />
      </div>

      <div>
        <TableComponent
          data={selectClassStudent.length ? selectClassStudent : selectFilter}
          render="LIST-STUDENT-CLASS"
          access={selectAccess?.level}
        />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="CLASS-STUDENT"
            idClass={params.idClass}
          />
        )}
      </div>

      <div>
        <FloatOption
          render="CLASS-STUDENT"
          idClass={params.idClass}
          access={selectAccess?.level}
        />
      </div>

      <div>
        {flagAlert && (
          <Notification
            dataState={dataState}
            clearLocalState={clearLocalState}
          />
        )}
      </div>
    </div>
  );
}

export default ClassParams;
