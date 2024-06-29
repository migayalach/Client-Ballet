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
  const selectQualification = useSelector(({ root }) => root?.qualification);
  const selectAux = useSelector(({ root }) => root?.aux);

  useEffect(() => {
    dispatch(getQualificationAll(params.idQualification, idUser));
  }, []);

  return (
    <div>
      <h1>Lista de estudiantes</h1>
      <TableNotes
        paramsQualification={selectAux}
        qualificationList={selectQualification}
      />
    </div>
  );
}

export default page;
