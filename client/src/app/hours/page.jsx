"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getHoursAll } from "@/redux/actions";
import TableComponent from "@/components/tableComponent/TableComponent";
import HoursFilter from "@/components/filters/hoursFilter/HoursFilter";

// JAVASCRIP

// STYLESHEET'

function Hours() {
  const dispatch = useDispatch();
  const selectHours = useSelector((state) => state.root.hours);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getHoursAll());
    }
  }, []);

  if (!selectHours?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>
        <HoursFilter />
      </div>
      <div>
        <h3>Lista de horarios</h3>
        <TableComponent
          data={selectHours.length ? selectHours : selectFilter}
          render="HOURS"
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="HOURS" />
        )}
      </div>
      <div>
        <FloatOption render="HOURS" />
      </div>
    </div>
  );
}

export default Hours;
