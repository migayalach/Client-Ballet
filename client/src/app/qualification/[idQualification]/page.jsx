"use client";
import TableComponent from "@/components/tableComponent/TableComponent";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQualificationAll } from "@/redux/actions";

function page({ params }) {
  const dispatch = useDispatch();
  const {
    dataUser: { idUser },
  } = useSelector(({ root }) => root?.access);
  const selectQualification = useSelector(({ root }) => root?.qualification);

  useEffect(() => {
    dispatch(getQualificationAll(params.idQualification, idUser));
  }, []);

  return (
    <div>
      <h1>Lista de estudiantes</h1>
      <TableComponent data={selectQualification} render="QUALIFICATION-USER" />
    </div>
  );
}

export default page;
