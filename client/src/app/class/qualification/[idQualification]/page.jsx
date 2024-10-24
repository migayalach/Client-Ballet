"use client";

// COMPONET'S
import TableNotes from "@/components/tableComponent/TableNotes";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getQualificationAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function page({ params }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.access);

  if (Object.keys(selectUser).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  useEffect(() => {
    dispatch(getQualificationAll(params?.idQualification));
  }, []);

  return (
    <div>
      <h1>Lista de estudiantes</h1>
      <TableNotes />
    </div>
  );
}

export default page;
