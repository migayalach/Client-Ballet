"use client";
import TableAssistance from "@/components/tableComponent/TableAssistance";
import React, { useEffect, useState } from "react";
import { getListIdAttendance } from "@/redux/actions";
import { useSelector, useDispatch } from "react-redux";

function page({ params }) {
  const dispatch = useDispatch();
  const selectAttendanceList = useSelector(({ root }) => root?.attendance);

  useEffect(() => {
    dispatch(getListIdAttendance(params?.idAssistance));

    return () => {
      // console.log(":D");
    };
  }, []);

  return (
    <div>
      LISTA DE CLASE A CALIFICAR - {params.idAssistance}{" "}
      <TableAssistance
        list={selectAttendanceList}
        attendance={params.idAssistance}
      />
    </div>
  );
}

export default page;
