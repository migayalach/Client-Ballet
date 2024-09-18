"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import UserFilter from "@/components/filters/userFilter/UserFilter";
import Loading from "@/components/pageResult/Loading";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

// LIBRARY

//REDUX
import { getUserAll } from "@/redux/actions";
import Cards from "@/components/cards/Cards";

// JAVASCRIP

// STYLESHEET'

function User() {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.root?.user);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);
  const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getUserAll());
    }
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectUser.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="conteiner-user">
      <div>
        <UserFilter />
      </div>
      <div>
        <Cards user={selectUser.length ? selectUser : selectFilter} />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet pages={selectInfo.pages} navegation="USER" />
        )}
      </div>
      <div>
        <FloatOption render="USER" access={selectAccess?.level} />
      </div>
    </div>
  );
}

export default User;
