"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import TableComponent from "@/components/tableComponent/TableComponent";
import HoursFilter from "@/components/filters/hoursFilter/HoursFilter";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getHoursAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function Hours() {
  const dispatch = useDispatch();
  const selectHours = useSelector((state) => state.root.hours);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector((state) => state.root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getHoursAll());
    }
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectHours?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {(selectAccess?.level === "Director" ||
        selectAccess?.level === "Secretaria" ||
        selectAccess?.level === "Profesor") && (
        <div>
          <HoursFilter />
        </div>
      )}
      <div>
        <h3>Lista de horarios</h3>
        <TableComponent
          data={selectHours.length ? selectHours : selectFilter}
          render="HOURS"
          access={selectAccess?.level}
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="HOURS" />
        )}
      </div>
      <div>
        <FloatOption render="HOURS" access={selectAccess?.level} />
      </div>
    </div>
  );
}

export default Hours;
