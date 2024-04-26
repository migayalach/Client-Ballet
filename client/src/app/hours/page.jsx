"use client";

// COMPONET'S
import NavBar from "@/components/navBar/NavBar";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getHoursAll } from "@/redux/actions";
import TableComponent from "@/components/tableComponent/TableComponent";

// JAVASCRIP

// STYLESHEET'

function Hours() {
  const dispatch = useDispatch();
  const selectHours = useSelector((state) => state.root.hours);
  const selectInfo = useSelector((state) => state.root.info);

  useEffect(() => {
    dispatch(getHoursAll());
  }, []);

  if (!selectHours.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h3>Lista de horarios</h3>
        <TableComponent data={selectHours} render="HOURS" />
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
        <FloatOption render="HOURS" />
      </div>
    </div>
  );
}

export default Hours;
