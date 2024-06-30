"use client";

import React, { useEffect } from "react";
import TableNotes from "@/components/tableComponent/TableNotes";
import { useDispatch, useSelector } from "react-redux";
import { getQualificationAll } from "@/redux/actions";

function page({ params }) {
  const dispatch = useDispatch();
  const {
    dataUser: { idUser },
  } = useSelector(({ root }) => root?.access);

  useEffect(() => {
    dispatch(getQualificationAll(params.idQualification, idUser));
  }, []);

  return (
    <div>
      <h1>Lista de estudiantes</h1>
      <TableNotes />
    </div>
  );
}

export default page;
