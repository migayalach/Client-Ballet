"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListEventsAll } from "@/redux/actions";
import ListContainer from "@/components/home/listEvents/listContainer/ListContainer";

function Events() {
  const dispatch = useDispatch();
  const selectList = useSelector(({ root }) => root?.list);

  useEffect(() => {
    dispatch(getListEventsAll());
    return () => {
      // console.log(";D");
    };
  }, []);

  return (
    <div>
      holis
      <ListContainer list={selectList} />
      <div>Paginado</div>
      <div>Agregar nuevos</div>
    </div>
  );
}

export default Events;
