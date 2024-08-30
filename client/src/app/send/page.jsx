"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "@/components/tableComponent/TableComponent";
import { getContactAll } from "@/redux/actions";

function page() {
  const dispatch = useDispatch();
  const selectList = useSelector(({ root }) => root?.contact);

  useEffect(() => {
    dispatch(getContactAll());
  }, []);

  return (
    <div>
      <p>filtros</p>
      <TableComponent
        data={selectList}
        render="CONTACT"
        /*access={}*/
      />
      <p>PAGINACION</p>
    </div>
  );
}

export default page;
