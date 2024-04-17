"use client";

// COMPONET'S
import CardComponent from "@/components/card/CardComponent";
import NavBar from "@/components/navBar/NavBar";
import PaginationComponet from "@/components/pagination/PaginationComponet";
import FloatOption from "@/components/floatOption/FloatOption";

import FormComponet from "@/components/form/formStaff/FormComponet";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getStaffAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function Staff() {
  const dispatch = useDispatch();
  const selectStaff = useSelector((state) => state.root.staff);
  const selectInfo = useSelector((state) => state.root);

  useEffect(() => {
    dispatch(getStaffAll());
  }, []);

  if (!selectStaff.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <CardComponent staff={selectStaff} />
      </div>
      <div>
        {selectInfo?.pages && (
          <PaginationComponet
            pages={selectInfo.pages}
            next={selectInfo.next}
            prev={selectInfo.prev}
          />
        )}
      </div>
      <div>
        <FloatOption />
      </div>
      {/* <FormComponet /> */}
    </div>
  );
}

export default Staff;
