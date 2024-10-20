"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";
import Page404 from "@/components/pageResult/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getParamsAllIdUser, filterAll, assitanceClear } from "@/redux/actions";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const selectListParams = useSelector(({ root }) => root?.params);
  const selectAccess = useSelector(({ root }) => root?.access);
  const accessLevel = selectAccess?.level;
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    dispatch(assitanceClear());
    if (!selectFilter.length) {
      dispatch(getParamsAllIdUser(selectAccess?.dataUser?.idUser));
    }
  }, []);

  if (Object.keys(selectAccess).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectListParams && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h4>FILTROS</h4>
      </div>

      <div>
        <TableComponent
          data={selectListParams}
          render="QUALIFICATION-ALL"
          access={accessLevel}
        />
      </div>

      <div>
        {selectInfo && (
          <PaginationComponet
            pages={selectInfo.pages}
            navegation="QUALIFICATION-ALL"
          />
        )}
      </div>
      <div>
        <FloatOption
          render="QUALIFICATION"
          nameLevel={selectAccess?.level}
          idUser={selectAccess?.dataUser?.idUser}
          access={selectAccess?.level}
        />
      </div>
    </div>
  );
}

export default page;
