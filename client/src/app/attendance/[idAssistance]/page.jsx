"use client";

// COMPONET'S
import TableAssistance from "@/components/tableComponent/TableAssistance";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//REDUX
import { getAllClassList } from "@/redux/actions";

function AssistanceClass({ params }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClassList(params?.idAssistance));
  }, []);

  return (
    <div>
      <h1>ASISTENCIA DE CLASE {params.idAssistance}</h1>
      <h2>HOLIST</h2>
    </div>
  );
}

export default AssistanceClass;
