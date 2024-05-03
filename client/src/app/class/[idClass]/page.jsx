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
  // const dispatch = useDispatch();
  // const selectClass = useSelector(({ root }) => root?.data);

  // useEffect(() => {
  //   dispatch(getByIdClass(params.idClass));
  // }, [params]);

  return (
    <div>
      <h1>ESTUDIANTES</h1>
      <h2>{params.idClass}</h2>
      <ListStudents idClass={params.idClass}/>
      {/* <div>
        <CardComponent student={selectStudent} />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            next={selectInfo.next}
            prev={selectInfo.prev}
          />
        )}
      </div>*/}
      <div>
        <FloatOption render="STUDENT" />
      </div>
    </div>
  );
}

export default ClassParams;

// DATOS DE LA CLASE
// DATOS DEL ESTUDIANTE
// LISTA DE ESTUDIANTES
