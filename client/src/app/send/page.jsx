"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "@/components/tableComponent/TableComponent";
import { getContactAll } from "@/redux/actions";
import SendFilter from "@/components/filters/sendFilter/SendFilter";
import PaginationComponet from "@/components/pagination/PaginationComponet";

function page() {
  const dispatch = useDispatch();
  const selectList = useSelector(({ root }) => root?.contact);
  const selectInfo = useSelector((state) => state?.root?.info);

  useEffect(() => {
    dispatch(getContactAll());
  }, []);

  return (
    <div>
      <SendFilter />
      <TableComponent
        data={selectList}
        render="CONTACT"
        /*access={}*/
      />
      <PaginationComponet pages={selectInfo?.pages} navegation="CONTACT" />
    </div>
  );
}

export default page;
