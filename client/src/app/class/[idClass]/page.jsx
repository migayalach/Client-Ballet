"use client";

// COMPONET'S
import CardComponent from "@/components/card/CardComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
// idClass: 5,
//       idHours: 1,
//       totalTime: '02:00:00',
//       stateHours: 1,
//       idUser: 2,
//       nameUser: 'Alejandra Maria',
//       lastNameUser: 'Mendez LLanos',
//       carnetUser: 654654,
//       department: 'Or',
//       idTypeClass: 1,
//       nameClass: 'Tinku',
//       parallel: '1-C',
//       stateClass: 1
