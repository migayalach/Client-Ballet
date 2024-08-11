"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { deleteAssistanceDate, getIdAssistance } from "@/redux/actions";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// JAVASCRIP

// STYLESHEET'

function Assistance() {
  const dispatch = useDispatch();
  const selectAssistanceList = useSelector(({ root }) => root?.assistance);
  const selectInfo = useSelector((state) => state.root?.info);
  const classLocalStorage = localStorage.getItem("classId");

  const handleDelete = (idClass, idAssistance) => {
    dispatch(deleteAssistanceDate(idClass, idAssistance));
  };

  const handleUpdate = (idClass, idAssistance) => {
    dispatch(getIdAssistance(idClass, idAssistance));
    console.log("open modal");
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
          handleUpdate={handleUpdate}
          // access={}
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="LIST-ASSISTANCE-IDCLASS"
            idClass={classLocalStorage}
          />
        )}
      </div>
      <div>
        <FloatOption
          render="LIST-ASSISTANCE-IDCLASS"
          // access={}
          idClass={classLocalStorage}
        />
      </div>
    </div>
  );
}

export default Assistance;
