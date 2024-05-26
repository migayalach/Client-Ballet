"use client";

// COMPONET'S
import NavBar from "@/components/navBar/NavBar";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getClassAll } from "@/redux/actions";
import ClassFilter from "@/components/filters/classFilter/ClassFilter";

// JAVASCRIP

// STYLESHEET'
function page() {
  const dispatch = useDispatch();
  const selectClass = useSelector(({ root }) => root?.classes);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getClassAll());
    }
  }, []);

  if (!selectClass && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <ClassFilter />
      </div>
      <div>
        <h3>Clases</h3>
        <TableComponent data={selectClass} render="CLASS" />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="CLASS" />
        )}
      </div>
      <div>
        <FloatOption render="CLASS" />
      </div>
    </div>
  );
}

export default page;
