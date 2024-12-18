"use client";
// COMPONET'S
import ListContainer from "@/components/home/listEvents/listContainer/ListContainer";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Notification from "@/components/modal/notification/Notification";
import ListEventFilter from "@/components/filters/listEventFilter/ListEventFilter";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import {
  getListEventsAll,
  listClear,
  removeData,
  assitanceClear,
} from "@/redux/actions";

// STYLESHEET
import "./events.css";

function Events() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectList = useSelector(({ root }) => root?.list);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector((state) => state.root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);
  const selectSuccess = useSelector(({ root }) => root?.success);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getListEventsAll());
      dispatch(assitanceClear());
    }
    return () => {
      dispatch(removeData());
      dispatch(listClear());
    };
  }, []);

  useEffect(() => {
    if (selectState === "login") {
      setDataState({
        state: selectState,
        message: `Bienvenido ${selectAccess.name}`,
      });
    } else if (selectError !== null) {
      if (selectError.message === "Contraseña incorrecta") {
        setDataState({
          message: selectError?.message,
          state: "error",
          action: "error-login",
        });
      }
    }
    if (selectState === "create-event") {
      setDataState({
        action: "create-event",
        state: "success",
        message: "Evento creado con exito",
      });
    } else if (selectState === "delete-event") {
      setDataState({
        action: "delete-event",
        state: "success",
        message: "Evento eliminado con exito",
      });
    } else if (selectError?.error === "Este evento no puede ser eliminado!") {
      setDataState({
        action: "error-delete-event",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectSuccess, selectAccess, selectError, selectState]);

  if (!selectList?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>
        <ListEventFilter />
      </div>

      <div className="list-container">
        <ListContainer
          list={selectList.length ? selectList : selectFilter}
          access={selectAccess?.level}
        />
      </div>

      <div>
        <PaginationComponet pages={selectInfo?.pages} navegation="EVENTS" />
      </div>

      <div>
        <FloatOption render="EVENTS" access={selectAccess?.level} />
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

export default Events;
