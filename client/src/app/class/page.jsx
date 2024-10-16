"use client";

// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import {
  getClassAll,
  getAssistanceClassId,
  levelClear,
  classClear,
  extensionClear,
  typeClassClear,
  userClear,
} from "@/redux/actions";
import ClassFilter from "@/components/filters/classFilter/ClassFilter";

// JAVASCRIP

// STYLESHEET'
function page() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectClass = useSelector(({ root }) => root?.classes);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({
      state: null,
      message: "",
    });
    setFlagAlert(false);
  };

  const handleFlagClass = (idClass) => {
    dispatch(getAssistanceClassId(idClass));
    localStorage.setItem("classId", JSON.stringify(idClass));
  };

  const handleUpdate = (idClass) => {
    console.log(idClass);
  };

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getClassAll(selectAccess?.idUser));
      dispatch(levelClear());
    }
    return () => {
      dispatch(classClear());
      dispatch(extensionClear());
      dispatch(typeClassClear());
      dispatch(userClear());
    };
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

  useEffect(() => {
    if (selectState?.length) {
      setDataState({
        state: selectState,
        message: "con exito",
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

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
          handleFlagClass={handleFlagClass}
          handleUpdate={handleUpdate}
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

export default page;
