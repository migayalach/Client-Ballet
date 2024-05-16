// COMPONET'S

// HOOK'S
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import { getPageUser, removeAux, filter } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./pagination.css";

function PaginationComponet({ pages }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const selectAux = useSelector(({ root }) => root?.aux);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectState = useSelector(({ root }) => root?.state);
  const selectUser = useSelector(({ root }) => root?.user);
  const selectFilter = useSelector(({ root }) => root?.filter);

  const setTIme = () =>
    setTimeout(() => {
      dispatch(removeAux());
    }, 500);

  const onChange = (page) => {
    if (selectUser.length) {
      dispatch(getPageUser(page));
      setCurrent(page);
    }
    if (!selectFilter.length) {
      dispatch(getPageUser(page));
      setCurrent(page);
    }
    if (filter.length > 0) {
      if (page < current) {
        dispatch(filter(selectInfo.prev, "filter"));
      } else {
        dispatch(filter(selectInfo.next, "filter"));
      }
      setCurrent(page);
    }
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
      const lengthUser = selectUser.length;
      if (lengthUser - 1 > 0 && lengthUser - 1 <= 20) {
        dispatch(getPageUser(current));
      } else {
        dispatch(getPageUser(selectInfo.pages));
        setCurrent(current - 1);
      }
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
