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
import { getContactAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const selectList = useSelector(({ root }) => root?.contact);
  const selectInfo = useSelector((state) => state?.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  // const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    dispatch(getContactAll());
  }, []);

  // if (Object.keys(selectAccess).length === 0) {
  //   return (
  //     <div>
  //       <Page404 />
  //     </div>
  //   );
  // }

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
          /*access={}*/
        />
      </div>

      <div>
        <PaginationComponet pages={selectInfo?.pages} navegation="CONTACT" />
      </div>
    </div>
  );
}

export default page;
