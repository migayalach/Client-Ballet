"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import Page404 from "@/components/pageResult/Page404";
import TableComponent from "@/components/tableComponent/TableComponent";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getIdAllClassStudent } from "@/redux/actions";

// STYLESHEET'

function ClassParams({ params }) {
  const dispatch = useDispatch();
  const selectClassStudent = useSelector(({ root }) => root?.student);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);

  // const selectUser = useSelector(({ root }) => root?.access);
  // if (Object.keys(selectUser).length === 0) {
  //   return (
  //     <div>
  //       <Page404 />
  //     </div>
  //   );
  // }

  const handleDelete = (idClass, idUser) => {
    alert(`${idClass}, ${idUser}`);
  };

  useEffect(() => {
    dispatch(getIdAllClassStudent(params?.idClass));
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

      <div>PAGINADO</div>
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
