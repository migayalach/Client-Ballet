"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import TypeClassFilter from "@/components/filters/typeClassFilter/TypeClassFilter";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getTypeClassAll, typeClassClear, removeAux } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function TypeClass() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectTypeClass = useSelector((state) => state.root.typeClass);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
    dispatch(removeAux());
  };

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getTypeClassAll());
    }
    return () => {
      dispatch(typeClassClear());
    };
  }, []);

  useEffect(() => {
    if (selectState === "create-typeClass") {
      setDataState({
        action: "create-typeClass",
        state: "success",
        message: "Clase creada con exito",
      });
    } else if (selectState === "delete-typeClass") {
      setDataState({
        action: "delete-typeClass",
        state: "success",
        message: "Clase eliminada con exito",
      });
    } else if (selectState === "edit-typeClass") {
      setDataState({
        action: "edit-typeClass",
        state: "success",
        message: "Se actualizo la informacion de la clase con exito",
      });
    } else if (
      selectError?.error ===
      "Lo siento no pueden haber tipo de clases repetidas"
    ) {
      setDataState({
        action: "error-create-typeClass",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

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
        <FloatOption render="TYPE-CLASS" access={selectAccess?.level} />
      </div>

      <div>
        {flagAlert && (
          <Notification
            dataState={dataState}
            clearLocalState={clearLocalState}
          />
        )}
      </div>
    </div>
  );
}

export default TypeClass;
