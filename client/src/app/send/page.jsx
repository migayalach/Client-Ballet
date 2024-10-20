"use client";
// COMPONET'S
import TableComponent from "@/components/tableComponent/TableComponent";
import SendFilter from "@/components/filters/sendFilter/SendFilter";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import {
  getContactAll,
  sentClear,
  removeData,
  assitanceClear,
} from "@/redux/actions";
import Notification from "@/components/modal/notification/Notification";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectList = useSelector(({ root }) => root?.contact);
  const selectInfo = useSelector((state) => state?.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    dispatch(getContactAll());
    dispatch(assitanceClear());
    return () => {
      dispatch(removeData());
      dispatch(sentClear());
    };
  }, []);

  useEffect(() => {
    if (selectState.length && !selectError) {
      setDataState({
        message: "Actualizado correctamente",
        state: `success`,
        action: "edit-contact",
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error-contact",
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
