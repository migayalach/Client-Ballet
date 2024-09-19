"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListEventsAll } from "@/redux/actions";
import ListContainer from "@/components/home/listEvents/listContainer/ListContainer";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";

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
      <div>Filter</div>
      <ListContainer list={selectList} />
      <div>Paginado</div>
      <div>
        <FloatOption
          render="EVENTS"
          access="Director"
          // access={selectAccess?.level}
        />
      </div>
    </div>
  );
}

export default Events;
