"use client";
import React from "react";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import { useSelector, useDispatch } from "react-redux";

function Assistance() {
  const selectAssistanceList = useSelector(({ root }) => root?.assistance);
  const selectInfo = useSelector((state) => state.root?.info);

  return (
    <div>
      <div>FILTROS</div>
      <h3>REGISTRO DE ASISTENCIAS</h3>
      <div>
        <TableComponent
          data={selectAssistanceList}
          render="LIST-ASSISTANCE-IDCLASS"
          // access={}
        />
      </div>
      <div>PAGINADO</div>
      <div>
        <FloatOption
          render="LIST-ASSISTANCE-IDCLASS"
          // access={}
        />
      </div>
    </div>
  );
}

export default Assistance;
