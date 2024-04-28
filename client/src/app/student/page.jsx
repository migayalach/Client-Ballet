"use client";

// COMPONET'S
import NavBar from "@/components/navBar/NavBar";
import CardComponent from "@/components/card/CardComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getStudentAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'S

function Student() {
  const dispatch = useDispatch();
  const selectStudent = useSelector((state) => state.root.student);
  const selectInfo = useSelector((state) => state.root.info);

  useEffect(() => {
    dispatch(getStudentAll());
  }, []);

  if (!selectStudent.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
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
      </div>
      <div>
        <FloatOption render="STUDENT" />
      </div>
    </div>
  );
}

export default Student;
