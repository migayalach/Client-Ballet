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
import { getUserAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function User() {
  const dispatch = useDispatch();
  const selectUser = useSelector((state) => state.root.user);
  const selectInfo = useSelector((state) => state.root.info);

  useEffect(() => {
    dispatch(getUserAll());
  }, []);

  if (!selectUser.length && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="conteiner-user">
      <div>
        <CardComponent user={selectUser} />
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
        <FloatOption render="USER" />
      </div>
      {/* <InfoStaff/> */}
    </div>
  );
}

export default User;
