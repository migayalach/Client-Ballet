"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventId, stateClear, listClear } from "@/redux/actions";
import FloatOption from "@/components/floatOption/FloatOption";
import Notification from "@/components/modal/notification/Notification";

function page({ params }) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectState = useSelector(({ root }) => root?.state);
  const selectEvent = useSelector(({ root }) => root?.event);
  const selectAccess = useSelector((state) => state.root?.access);
  const selectError = useSelector(({ root }) => root?.error);
  const selectSuccess = useSelector(({ root }) => root?.success);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  const [data, setData] = useState({
    idListEvent: "",
    hourEvent: "00:00:00",
    dateNews: "",
    title: "",
    body: "",
    stateEvent: false,
    urlPicture: "",
  });

  useEffect(() => {
    selectState === "edit-event"
      ? setTimeout(() => {
          dispatch(stateClear());
        }, 500)
      : "";
  }, [selectState]);

  useEffect(() => {
    dispatch(getEventId(params?.idEvent));
    return () => {
      setData({
        idListEvent: "",
        hourEvent: "00:00:00",
        dateNews: "",
        title: "",
        body: "",
        stateEvent: false,
        urlPicture: "",
      });
      dispatch(listClear());
    };
  }, []);

  useEffect(() => {
    selectEvent?.map(
      ({
        idListEvent,
        hourEvent,
        dateNews,
        title,
        body,
        stateEvent,
        urlPicture,
      }) =>
        setData({
          idListEvent,
          hourEvent,
          dateNews: dateNews.toString().slice(0, 10),
          title,
          body,
          stateEvent,
          urlPicture,
        })
    );
    return () => {
      // console.log(";D");
    };
  }, [selectEvent, selectState]);

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
    } else if (selectState === "edit-event") {
      setDataState({
        action: "edit-event",
        state: "success",
        message: "Evento actualizado con exito!",
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectSuccess, selectAccess, selectError, selectState]);

  return (
    <div>
      <div>
        <p>{data.hourEvent}</p>
        <p>{data.dateNews}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.stateEvent}</p>
      </div>

      <div>
        Here be the photo almacening in the state local of component Data.
        <img src={data.urlPicture} height={480} width={500}></img>
      </div>

      {(selectAccess?.level === "Director" ||
        selectAccess?.level === "Secretaria") && (
        <div>
          <FloatOption
            render="EVENTS"
            access={selectAccess?.level}
            event="edit-event"
          />
        </div>
      )}

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
