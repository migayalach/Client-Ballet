"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getByIdUser } from "@/redux/actions";
import CollapseData from "@/components/collapseData/CollapseData";
import "./info-staff.css";

function InfoUser({ params }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.data);

  useEffect(() => {
    params.idUser && dispatch(getByIdUser(params.idUser));
  }, [params]);

  return (
    <div className="conteiner-data">
      <div>
        <h1>{selectUser?.nameUser}</h1>
      </div>
      <div>
        <CollapseData render="user"/>
      </div>
    </div>
  );
}

export default InfoUser;
