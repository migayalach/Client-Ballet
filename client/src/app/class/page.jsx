"use client";

// COMPONET'S

// import NavBar from "@/components/navBar/NavBar";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getClassAll } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
function page() {
  const dispatch = useDispatch();
  const selectClass = useSelector(({ root }) => root?.classes);
  const selectInfo = useSelector((state) => state.root?.info);

  useEffect(() => {
    dispatch(getClassAll());
  }, []);

  if (!selectClass && !selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div>{/* <NavBar /> */}MENU</div>
      <div>
        <h3>Clases</h3>
        <TableComponent data={selectClass} render="CLASS" />
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
        <FloatOption render="CLASS" />
      </div>
    </div>
  );
}

export default page;
