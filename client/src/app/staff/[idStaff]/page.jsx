"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getByIdStaff } from "@/redux/actions";
import CollapseData from "@/components/collapseData/CollapseData";
import "./info-staff.css";

function InfoStaff({ params }) {
  const dispatch = useDispatch();
  const selectUser = useSelector(({ root }) => root?.data);

  useEffect(() => {
    params.idStaff && dispatch(getByIdStaff(params.idStaff));
  }, [params]);

  return (
    <div className="conteiner-data">
      <div>
        <h1>{selectUser?.nameStaff}</h1>
      </div>
      <div>
        <CollapseData render="staff"/>
      </div>
    </div>
  );
}

export default InfoStaff;
