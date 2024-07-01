"use client";

// COMPONET'S
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getParamsAllIdUser, filterAll } from "@/redux/actions";
import TableComponent from "@/components/tableComponent/TableComponent";
import FloatOption from "@/components/floatOption/FloatOption";

// JAVASCRIP

// STYLESHEET'

function page() {
  const dispatch = useDispatch();
  const selectListParams = useSelector(({ root }) => root?.params);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectInfo = useSelector((state) => state.root?.info);
  const selectFilter = useSelector((state) => state.root?.filter);

  useEffect(() => {
    if (!selectFilter.length) {
      dispatch(getParamsAllIdUser(selectAccess?.dataUser?.idUser));
    }
  }, []);

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
        <TableComponent data={selectListParams} render="QUALIFICATION-ALL" />
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
        />
      </div>
    </div>
  );
}

export default page;
