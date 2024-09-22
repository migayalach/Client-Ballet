"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListEventsAll } from "@/redux/actions";
import ListContainer from "@/components/home/listEvents/listContainer/ListContainer";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Loading from "@/components/pageResult/Loading";

function Events() {
  const dispatch = useDispatch();
  const selectList = useSelector(({ root }) => root?.list);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector((state) => state.root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getListEventsAll());
    }
  }, []);

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
    </div>
  );
}

export default Events;
