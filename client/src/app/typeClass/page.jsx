"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import NavBar from "@/components/navBar/NavBar";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getTypeClassAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function TypeClass() {
  const dispatch = useDispatch();

  const selectTypeClass = useSelector((state) => state.root.typeClass);
  const selectInfo = useSelector((state) => state.root.info);

  useEffect(() => {
    dispatch(getTypeClassAll());
  }, []);

  if (!selectTypeClass.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Tipos de clase</h1>
        <TableComponent data={selectTypeClass} render="TYPE-CLASS" />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            next={selectInfo.next}
            prev={selectInfo.prev}
          />
        )}
      </div>
      <div>
        <FloatOption render="TYPE-CLASS" />
      </div>
    </div>
  );
}

export default TypeClass;
