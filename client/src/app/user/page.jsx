"use client";

// COMPONET'S
import CardComponent from "@/components/card/CardComponent";
import NavBar from "@/components/navBar/NavBar";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getStaffAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function Staff() {
  const dispatch = useDispatch();
  const selectStaff = useSelector((state) => state.root.staff);
  const selectInfo = useSelector((state) => state.root.info);

  useEffect(() => {
    dispatch(getStaffAll());
  }, []);

  if (!selectStaff.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="conteiner-staff">
      <div>
        <CardComponent staff={selectStaff} />
      </div>
      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            next={selectInfo.next}
            prev={selectInfo.prev}
          />
        )}
      </div>
      <div>
        <FloatOption render="STAFF" />
      </div>
      {/* <InfoStaff/> */}
    </div>
  );
}

export default Staff;
