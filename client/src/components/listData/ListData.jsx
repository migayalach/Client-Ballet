import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import TableComponent from "../tableComponent/TableComponent";

const ContainerHeight = 400;

function ListData({ flagRender, modal }) {
  
  const selectFilterAll = useSelector(({ root }) => root?.filterAll);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(selectFilterAll);
  }, [selectFilterAll]);

  return (
    <List>
      <TableComponent data={data} render={flagRender} modal={modal} />
    </List>
  );
}

export default ListData;
