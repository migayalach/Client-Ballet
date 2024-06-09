"use client";

// COMPONET'S
import CardComponent from "@/components/card/CardComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListStudents from "@/components/listStudents/ListStudents";

//REDUX
// import { getByIdClass } from "@/redux/actions";

function ClassParams({ params }) {
  return (
    <div>
      <h1>ESTUDIANTES</h1>
      <h2>{params.idClass}</h2>
      <div>
        <ListStudents idClass={params.idClass} />
      </div>
      <div>
        {/* <FloatOption render="CLASS-STUDENT" idClass={params.idClass} /> */}
      </div>
    </div>
  );
}

export default ClassParams;

// DATOS DE LA CLASE
// DATOS DEL ESTUDIANTE
// LISTA DE ESTUDIANTES
