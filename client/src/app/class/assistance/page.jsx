"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { deleteAssistanceDate } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function Assistance() {
  const dispatch = useDispatch();
  const selectAssistanceList = useSelector(({ root }) => root?.assistance);
  const classLocalStorage = localStorage.getItem("classId");
  const selectInfo = useSelector((state) => state.root?.info);
  const handleDelete = (idClass, idAssistance) => {
    dispatch(deleteAssistanceDate(idClass, idAssistance));
  };

  return (
    <div>
      <div>FILTROS</div>
      <h3>REGISTRO DE ASISTENCIAS</h3>
      <div>
        <TableComponent
          data={selectAssistanceList}
          render="LIST-ASSISTANCE-IDCLASS"
          handleDelete={handleDelete}
          // access={}
        />
      </div>
      <div>PAGINADO</div>
      <div>
        <FloatOption
          render="LIST-ASSISTANCE-IDCLASS"
          idClass={classLocalStorage}
          // access={}
        />
      </div>
    </div>
  );
}

export default Assistance;
