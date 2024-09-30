"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import UserFilter from "@/components/filters/userFilter/UserFilter";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getUserAll } from "@/redux/actions";
import Cards from "@/components/cards/Cards";

// JAVASCRIP

// STYLESHEET'

function User() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectUser = useSelector((state) => state.root?.user);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectAux = useSelector(({ root }) => root.aux);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({
      state: null,
      message: "",
    });
    setFlagAlert(false);
  };

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getUserAll());
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (selectAux && selectState === "create") {
      setDataState({
        state: selectState,
        message: `Usuario creado con exito.`,
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectState, selectError, selectAux]);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectUser.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="conteiner-user">
      <div>
        <UserFilter />
      </div>

      <div>
        <Cards user={selectUser.length ? selectUser : selectFilter} />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="USER" />
        )}
      </div>

      <div>
        <FloatOption render="USER" access={selectAccess?.level} />
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

export default User;
