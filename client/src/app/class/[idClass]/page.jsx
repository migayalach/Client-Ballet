"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import Page404 from "@/components/pageResult/Page404";
import Loading from "@/components/pageResult/Loading";
import TableComponent from "@/components/tableComponent/TableComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getIdAllClassStudent, studentClear } from "@/redux/actions";

// STYLESHEET'

function ClassParams({ params }) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectClassStudent = useSelector(({ root }) => root?.student);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectUser = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({
      state: null,
      message: "",
    });
    setFlagAlert(false);
  };

  if (Object.keys(selectUser).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  const handleDelete = (idClass, idUser) => {
    alert(`${idClass}, ${idUser}`);
  };

  useEffect(() => {
    dispatch(getIdAllClassStudent(params?.idClass));
    return () => {
      dispatch(studentClear());
    };
  }, []);

  return (
    <div>
      <h3>Lista de estudiantes</h3>

      <div>FILTROS</div>

      <div>
        <TableComponent
          data={selectClassStudent.length ? selectClassStudent : selectFilter}
          render="LIST-STUDENT-CLASS"
          access={selectAccess?.level}
          handleDelete={handleDelete}
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
    </div>
  );
}

export default ClassParams;
