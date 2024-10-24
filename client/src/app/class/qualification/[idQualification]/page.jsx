"use client";

// COMPONET'S
import TableNotes from "@/components/tableComponent/TableNotes";
import Page404 from "@/components/pageResult/Page404";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//REDUX
import {
  getQualificationAll,
  qualificationClear,
  removeAux,
} from "@/redux/actions";

function page({ params }) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectUser = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  if (Object.keys(selectUser).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  useEffect(() => {
    dispatch(getQualificationAll(params?.idQualification));
    return () => {
      dispatch(qualificationClear());
      dispatch(removeAux());
    };
  }, []);

  useEffect(() => {
    if (selectState === "create-qualification") {
      setDataState({
        action: "create-qualification",
        state: "success",
        message: "Calificacion realizada con exito!",
      });
    } else if (selectError?.error === "No se pudo realizar esta operacion!") {
      setDataState({
        action: "error-delete-qualification",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

  return (
    <div>
      <h1>Lista de estudiantes</h1>

      <TableNotes />
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
