"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//REDUX
import {
  getParamsAllIdUser,
  filterAll,
  assitanceClear,
  dataDownload,
} from "@/redux/actions";

function page() {
  const dispatch = useDispatch();
  const [idCLass, setIdClass] = useState(0);
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectListParams = useSelector(({ root }) => root?.params);
  const selectAccess = useSelector(({ root }) => root?.access);
  const accessLevel = selectAccess?.level;
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

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

  if (!selectListParams && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const downloadList = (idClass, idParams) => {
    dispatch(
      dataDownload(
        selectAccess?.idUser,
        idClass,
        "",
        "listQualification",
        idParams
      )
    );
  };

  useEffect(() => {
    if (selectState === "create-param") {
      setDataState({
        action: "create-param",
        state: "success",
        message: "Evaluacion creada con exito",
      });
    } else if (selectState === "edit-param") {
      setDataState({
        action: "edit-param",
        state: "success",
        message: "Se actualizo la evaluacion con exito",
      });
    } else if (selectState === "delete-param") {
      setDataState({
        action: "delete-param",
        state: "success",
        message: "Evaluacion eliminada con exito",
      });
    } else if (
      selectError?.error ===
        "Este titulo ya esta registrado como evaluacion para este curso" ||
      selectError?.error ==
        "Lo siento no puede realizar esta accion porque ya se cuenta con un promedio"
    ) {
      setDataState({
        action: "error-delete-param",
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
  }, [selectState, selectError]);

  useEffect(() => {
    let storageData = localStorage.getItem("numberClass");
    setIdClass(storageData);
    if (!selectFilter.length) {
      dispatch(getParamsAllIdUser(localStorage.getItem("numberClass")));
    }

    return () => {
      dispatch(assitanceClear());
      setIdClass(0);
    };
  }, []);

  return (
    <div>
      <div>
        <h4>FILTROS</h4>
      </div>

      <div>
        <TableComponent
          data={selectListParams}
          render="QUALIFICATION-ALL"
          access={accessLevel}
          download={downloadList}
        />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet
            idClass={idCLass}
            pages={selectInfo.pages}
            navegation="QUALIFICATION-ALL"
          />
        )}
      </div>

      <div>
        <FloatOption
          idClass={idCLass}
          render="QUALIFICATION"
          nameLevel={selectAccess?.level}
          idUser={selectAccess?.dataUser?.idUser}
          access={selectAccess?.level}
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

export default page;
