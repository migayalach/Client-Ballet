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
import "./pagination.css";

function PaginationComponet({ pages, prev, next }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);

  const onChange = (page) => {
    dispatch(getPageHours(page));
    setCurrent(page);
  };

  return (
    <div className="container-pagination">
      <Pagination current={current} onChange={onChange} total={pages * 10} />
    </div>
  );
}

export default PaginationComponet;
