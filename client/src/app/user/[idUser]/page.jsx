"use client";
// COMPONET'S
import CollapseData from "@/components/collapseData/CollapseData";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getByIdUser } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./info-staff.css";

function InfoUser({ params }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.data);
  const selectAccess = useSelector(({ root }) => root?.access);

  useEffect(() => {
    params.idUser && dispatch(getByIdUser(params.idUser));
  }, [params]);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  return (
    <div className="conteiner-data">
      <div>
        <h1>{selectUser?.nameUser}</h1>
        <h1>{selectUser?.nameLevel}</h1>
        <h1>{selectUser?.carnetUser}</h1>
        <h1>{selectUser?.department}</h1>
      </div>
      <div>
        <CollapseData render="user" />
      </div>
    </div>
  );
}

export default InfoUser;
