"use client";

// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";

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
  const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getClassAll(selectAccess?.dataUser?.idUser));
    }
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectClass && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>
        {(selectAccess?.level === "Director" ||
          selectAccess?.level === "Secretaria" ||
          selectAccess?.level === "Profesor") && <ClassFilter />}
      </div>
      <div>
        <h3>Clases</h3>
        <TableComponent
          data={selectClass.length ? selectClass : selectFilter}
          render="CLASS"
          access={selectAccess?.level}
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="CLASS" />
        )}
      </div>
      <div>
        <FloatOption render="CLASS" access={selectAccess.level} />
      </div>
    </div>
  );
}

export default page;
