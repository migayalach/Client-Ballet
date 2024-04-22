"use client";

// COMPONET'S
// import NavBar from "@/components/navBar/NavBar";
import List from "@/components/list/List";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getHoursAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function Hours() {
  const dispatch = useDispatch();
  const selectHours = useSelector((state) => state.root.hours);
  useEffect(() => {
    dispatch(getHoursAll());
  }, []);

  return (
    <div>
      <div>{/* <NavBar /> */}</div>
      <div>
        <h3>Lista de horarios</h3>
        <List data={selectHours} />
      </div>
      <div>
        <FloatOption render="HOURS" />
      </div>
    </div>
  );
}

export default Hours;
