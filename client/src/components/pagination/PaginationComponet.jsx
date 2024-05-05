// COMPONET'S

// HOOK'S
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getPageHours, getPageUser, removeAux } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./pagination.css";

function PaginationComponet({ pages }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const selectAux = useSelector(({ root }) => root?.aux);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectState = useSelector(({ root }) => root?.state);

  const setTIme = () =>
    setTimeout(() => {
      dispatch(removeAux());
    }, 500);

  const onChange = (page) => {
    dispatch(getPageUser(page));
    setCurrent(page);
  };

  useEffect(() => {
    if (Object.keys(selectAux).length && selectState === "create") {
      const number = selectInfo.pages * 20;
      if (selectInfo.count <= number) {
        dispatch(getPageUser(selectInfo.pages));
        setCurrent(selectInfo.pages);
        setTIme();
      }
    } else if (selectState === "delete") {
      dispatch(getPageUser(current));
      setTIme();
    }
  }, [selectAux, selectState]);

  return (
    <div className="container-pagination">
      <Pagination onChange={onChange} total={pages * 10} current={current} />
    </div>
  );
}

export default PaginationComponet;
