"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import SendFilter from "@/components/filters/sendFilter/SendFilter";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getContactAll, sentClear, removeData } from "@/redux/actions";
import Notification from "@/components/modal/notification/Notification";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectList = useSelector(({ root }) => root?.contact);
  const selectInfo = useSelector((state) => state?.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
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
    dispatch(getContactAll());
    return () => {
      dispatch(removeData());
      dispatch(sentClear());
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

  if (
    Object.keys(selectAccess).length === 0 ||
    selectAccess.access === "Director" ||
    selectAccess.access === "Secretaria"
  ) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

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
        <SendFilter />
      </div>

      <div>
        <TableComponent
          data={selectList.length ? selectList : selectFilter}
          render="CONTACT"
        />
      </div>

      <div>
        <PaginationComponet pages={selectInfo?.pages} navegation="CONTACT" />
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
