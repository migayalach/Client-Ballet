"use client";
// COMPONET'S
import List from "@/components/list/List";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getHoursAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function ListData() {
  const dispatch = useDispatch();
  const selectHours = useSelector((state) => state.root.hours);
  useEffect(() => {
    dispatch(getHoursAll());
  }, []);
  return (
    <div>
      <h3>Lista de horarios</h3>
      <List data={selectHours} />
    </div>
  );
}

export default ListData;
