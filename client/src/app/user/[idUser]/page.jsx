"use client";
// COMPONET'S
import Page404 from "@/components/pageResult/Page404";
import FloatOption from "@/components/floatOption/FloatOption";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { stateClear, getByIdUser } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./info-staff.css";

function InfoUser({ params }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectDataUser = useSelector(({ root }) => root?.data);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    if (selectState === "editUser") {
      setDataState({
        action: "edit-user",
        state: "success",
        message: "Se actualizo la informacion del usuario con exito",
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectState, selectError]);

  useEffect(() => {
    if (selectState === "editUser") {
      setTimeout(() => {
        dispatch(stateClear());
      }, 1500);
    }
  }, [selectState, selectDataUser]);

  useEffect(() => {
    dispatch(getByIdUser(params.idUser));
    return () => {
      dispatch(stateClear());
    };
  }, []);

  useEffect(() => {
    setData({ ...selectDataUser });
  }, [selectDataUser]);

  return (
    <div className="conteiner-data">
      <div>
        <h1>{data?.nameUser}</h1>
        filtros para dos casos: estudiante = Si es estudiante muestra las clases
        que pasa docente = Si es docente filtra y muestra sus cursos impartidos
        con opcines a imprimir
      </div>
      <div>
        <FloatOption
          idUser={params.idUser}
          render="USER"
          access={selectAccess?.level}
          event="edit"
        />
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

export default InfoUser;
