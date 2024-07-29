"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React from "react";
import { useSelector } from "react-redux";
import ListStudents from "@/components/listStudents/ListStudents";

//REDUX
function ClassParams({ params }) {
  const selectUser = useSelector(({ root }) => root?.access);

  if (Object.keys(selectUser).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  return (
    <div>
      <h1>ESTUDIANTES</h1>
      <h2>{params.idClass}</h2>
      <div>
        <ListStudents idClass={params.idClass} />
      </div>
      <div>
        <FloatOption
          render="CLASS-STUDENT"
          idClass={params.idClass}
          access={selectUser?.level}
        />
      </div>
    </div>
  );
}

export default ClassParams;
