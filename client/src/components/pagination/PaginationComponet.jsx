// COMPONET'S

// HOOK'S
import React, { useState } from "react";
import { Pagination } from "antd";
import { useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { getPageHours } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function PaginationComponet({ pages, prev, next }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    dispatch(getPageHours(page));
    setCurrent(page);
  };

  return (
    <Pagination current={current} onChange={onChange} total={pages * 10} />
  );
}

export default PaginationComponet;
