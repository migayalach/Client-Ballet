"use client";
// COMPONET'S
import TableAssistance from "@/components/tableComponent/TableAssistance";
import Notification from "@/components/modal/notification/Notification";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import { getListIdAttendance } from "@/redux/actions";

// STYLESHEET'

function page({ params }) {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectAttendanceList = useSelector(({ root }) => root?.attendance);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    dispatch(getListIdAttendance(params?.idAssistance));

    return () => {
      // console.log(":D");
    };
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectAttendanceList) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  useEffect(() => {
    if (selectState === "Registado con exito") {
      setDataState({
        action: "create-list-assitance",
        state: "success",
        message: "Asistencia registrada con exito",
      });
    }
    setFlagAlert(true);
  }, [selectState]);

  return (
    <div>
      LISTA DE CLASE A MARCAR ASISTENCIA - {params.idAssistance}
      <TableAssistance
        list={selectAttendanceList}
        attendance={params.idAssistance}
      />
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
