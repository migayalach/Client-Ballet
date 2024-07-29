"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getTypeClassAll } from "@/redux/actions";
import TypeClassFilter from "@/components/filters/typeClassFilter/TypeClassFilter";

// JAVASCRIP

// STYLESHEET'

function TypeClass() {
  const dispatch = useDispatch();

  const selectTypeClass = useSelector((state) => state.root.typeClass);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getTypeClassAll());
    }
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectTypeClass?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>
        <TypeClassFilter />
      </div>
      <div>
        <h1>Tipos de clase</h1>
        <TableComponent
          data={selectTypeClass.length ? selectTypeClass : selectFilter}
          render="TYPE-CLASS"
          access={selectAccess?.level}
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="TYPE-CLASS"
          />
        )}
      </div>
      <div>
        && <FloatOption render="TYPE-CLASS" access={selectAccess?.level} />
      </div>
    </div>
  );
}

export default TypeClass;
