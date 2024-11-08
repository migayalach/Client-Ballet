"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import Notification from "@/components/modal/notification/Notification";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import AssistanceFilter from "@/components/filters/assistanceFilter/AssistanceFilter";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import {
  deleteAssistanceDate,
  getIdAssistance,
  dataDownload,
} from "@/redux/actions";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// JAVASCRIP

// STYLESHEET'

function Assistance() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectAssistanceList = useSelector(({ root }) => root?.assistance);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);
  const classLocalStorage = localStorage.getItem("classId");

  const handleDelete = (idClass, idAssistance) => {
    dispatch(deleteAssistanceDate(idClass, idAssistance));
  };

  const handleUpdate = (idClass, idAssistance) => {
    dispatch(getIdAssistance(idClass, idAssistance));
  };

  const downloadList = (idClass, idAssistance) => {
    dispatch(
      dataDownload(selectAccess?.idUser, idClass, idAssistance, "listAssitance")
    );
  };

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectAssistanceList && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  useEffect(() => {
    if (selectState === "create-assistance") {
      setDataState({
        action: "create-assistance",
        state: "success",
        message: "Asistencia creada con exito",
      });
    } else if (selectState === "delete-assistance") {
      setDataState({
        action: "delete-assistance",
        state: "success",
        message: "Asistencia eliminada con exito",
      });
    } else if (
      selectError?.error ===
        "Esta clase no puede generar un registro ya que no cuenta con alumnado" ||
      selectError?.error ==
        "Lo siento no se puede modificar la fecha ya que actualmente ya se registro la asistencia" ||
      selectError?.error ===
        "Lo siento no se puede eliminar ya que actualmente ya se registro asistencias"
    ) {
      setDataState({
        action: "error-delete-assistance",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

  return (
    <div>
      <h2>REGISTRO DE ASISTENCIAS</h2>

      <div>
        <AssistanceFilter idClass={classLocalStorage} />
      </div>

      <div>
        <TableComponent
          data={
            selectAssistanceList.length ? selectAssistanceList : selectFilter
          }
          render="LIST-ASSISTANCE-IDCLASS"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          access={selectAccess?.level}
          download={downloadList}
        />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="LIST-ASSISTANCE-IDCLASS"
            idClass={classLocalStorage}
          />
        )}
      </div>
      <div>
        <FloatOption
          render="LIST-ASSISTANCE-IDCLASS"
          access={selectAccess?.level}
          idClass={classLocalStorage}
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

export default Assistance;
