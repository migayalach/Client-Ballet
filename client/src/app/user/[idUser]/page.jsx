"use client";
// COMPONET'S
import Page404 from "@/components/pageResult/Page404";
import FloatOption from "@/components/floatOption/FloatOption";
import Notification from "@/components/modal/notification/Notification";
import UserInfoFilter from "@/components/filters/userInfoFilter/UserInfoFilter";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import TableComponent from "@/components/tableComponent/TableComponent";
import NoResults from "@/components/pageResult/NoResults";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//REDUX
import {
  stateClear,
  getByIdUser,
  removeData,
  filterClear,
} from "@/redux/actions";

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
  const selectInfo = useSelector((state) => state.root?.info);
  const selectAction = useSelector(({ root }) => root?.action);

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
    if(params.idUser > 0 ){
      dispatch(getByIdUser(params.idUser));
    }
    return () => {
      dispatch(stateClear());
    };
  }, []);

  useEffect(() => {
    setData({ ...selectDataUser });
  }, [selectDataUser]);

  useEffect(() => {
    return () => {
      dispatch(removeData());
      dispatch(filterClear());
    };
  }, []);

  return (
    <div className="conteiner-data">
      <div>
        <UserInfoFilter idUser={params.idUser} />
      </div>

      <div>
        {selectAction === "" && !selectFilter.length && (
          <NoResults message="Realice una busqueda para ver resultados!" />
        )}

        {selectAction === "qualification" && (
          <TableComponent
            data={selectFilter}
            render="INFO-USER-QUALIFICATION"
          />
        )}

        {selectAction === "assistance" && (
          <TableComponent data={selectFilter} render="INFO-USER-ASSISTANCE" />
        )}
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="INFO-USER-DATA"
          />
        )}
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
