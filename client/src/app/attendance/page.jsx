"use client";

// COMPONET'S
import AssistanceFilter from "@/components/filters/assistanceFilter/AssistanceFilter";
import TableComponent from "@/components/tableComponent/TableComponent";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getAllClassList } from "@/redux/actions";

function Attendance() {
  const dispatch = useDispatch();
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getAllClassList());
    }
  }, []);

  return (
    <div>
      <div>
        <AssistanceFilter />
      </div>
      <div>
        <TableComponent data={selectFilter} render="LIST-CLASS-ASSISTANCE" />
      </div>
      <div>PAGINATION</div>
      <div>FLOAT OPTION</div>
    </div>
  );
}

export default Attendance;
