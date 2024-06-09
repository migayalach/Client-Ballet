"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { paramsQualificationAll } from "@/redux/actions";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const selectListParams = useSelector(({ root }) => root?.qualification);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(paramsQualificationAll());
    }
  }, []);

  if (!selectListParams && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  console.log(selectAccess);

  return (
    <div>
      <div>
        <h1>FILTROS - QUALIFICATION ()</h1>
        <p>solo lo pueden ver todos los registros el director y secretaria</p>
        <p>
          El profesor solo puede ver de sus cursos y hacer las acciones
          necesarias
        </p>
        <p>El alumno no puede ver</p>
        <p>Si es secretaria no puede crear</p>
      </div>

      <div>
        <TableComponent data={selectListParams} render="QUALIFICATION-ALL" />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="QUALIFICATION-ALL"
          />
        )}
      </div>
      <div>
        <FloatOption
          render="QUALIFICATION"
          nameLevel={selectAccess?.level}
          idUser={selectAccess?.dataUser?.idUser}
        />
      </div>
    </div>
  );
}

export default page;
