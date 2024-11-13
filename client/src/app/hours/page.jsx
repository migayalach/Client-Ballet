"use client";

// COMPONET'S
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import TableComponent from "@/components/tableComponent/TableComponent";
import HoursFilter from "@/components/filters/hoursFilter/HoursFilter";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import {
  getHoursAll,
  hoursClear,
  assitanceClear,
  actionClear,
} from "@/redux/actions";

// STYLESHEET'

// JAVASCRIP

function Hours() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectHours = useSelector((state) => state.root.hours);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector((state) => state.root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);
  const selectAction = useSelector(({ root }) => root?.action);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    dispatch(assitanceClear());
    if (!selectFilter.length) {
      dispatch(getHoursAll());
    }
    return () => {
      dispatch(hoursClear());
    };
  }, []);

  useEffect(() => {
    if (selectAction === "qualification" || selectAction === "assistance") {
      dispatch(actionClear());
      dispatch(getHoursAll());
    }
  }, [selectAction]);

  useEffect(() => {
    if (selectState === "create-hour") {
      setDataState({
        action: "create-hour",
        state: "success",
        message: "Hora creada con exito",
      });
    } else if (selectState === "delete-hour") {
      setDataState({
        action: "delete-hour",
        state: "success",
        message: "Hora eliminada con exito",
      });
    } else if (selectState === "edit-hour") {
      setDataState({
        action: "edit-hour",
        state: "success",
        message: "Se actualizo la hora con exito",
      });
    } else if (
      selectError?.error ===
      "Esta hora no puede ser eliminada ya que se encuentra vinculada a una clase."
    ) {
      setDataState({
        action: "error-delete-hour",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectState, selectError]);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectHours?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      {(selectAccess?.level === "Director" ||
        selectAccess?.level === "Secretaria" ||
        selectAccess?.level === "Profesor") && (
        <div>
          <HoursFilter />
        </div>
      )}

      <div>
        <h3>Lista de horarios</h3>
        <TableComponent
          data={selectHours.length ? selectHours : selectFilter}
          render="HOURS"
          access={selectAccess?.level}
        />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="HOURS" />
        )}
      </div>

      <div>
        <FloatOption render="HOURS" access={selectAccess?.level} />
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

export default Hours;
