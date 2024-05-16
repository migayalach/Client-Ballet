"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";
import Filters from "@/components/filters/Filters";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getUserAll } from "@/redux/actions";
import Cards from "@/components/cards/Cards";

// JAVASCRIP

// STYLESHEET'

function User() {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.root.user);
  const selectInfo = useSelector((state) => state.root.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getUserAll());
    }
  }, []);

  if (!selectUser.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="conteiner-user">
      <div>
        <Filters />
      </div>
      <div>
        <Cards user={selectUser.length ? selectUser : selectFilter} />
      </div>
      <div>{selectInfo && <PaginationComponet pages={selectInfo.pages} />}</div>
      <div>
        <FloatOption render="USER" />
      </div>
    </div>
  );
}

export default User;
