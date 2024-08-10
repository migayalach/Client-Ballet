"use client";
import React from "react";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssistanceDate } from "@/redux/actions";

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
