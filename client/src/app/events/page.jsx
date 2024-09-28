"use client";
// COMPONET'S
import ListContainer from "@/components/home/listEvents/listContainer/ListContainer";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

// REDUX
import {
  getListEventsAll,
  listClear,
  removeData,
  removeError,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET

function Events() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectList = useSelector(({ root }) => root?.list);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector((state) => state.root?.access);
  const selectState = useSelector(({ root }) => root?.state);
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
      dispatch(getListEventsAll());
    }
    return () => {
      dispatch(removeData());
      dispatch(listClear());
      // dispatch(removeError());
    };
  }, []);

  useEffect(() => {
    if (selectState?.length) {
      setDataState({
        state: selectState,
        message: "con exito",
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error",
        message: selectError?.error,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectState, selectError]);

  if (!selectList?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>Filter</div>

      <div>
        <ListContainer list={selectList} access={selectAccess?.level} />
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
