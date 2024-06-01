import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import TableComponent from "../tableComponent/TableComponent";

const ContainerHeight = 400;

function ListData({ flagRender, modal }) {
  const selectFilterAll = useSelector(({ root }) => root?.filterAll);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectFilterAll) {
      setData(selectFilterAll);
    }
  }, [selectFilterAll]);

  return (
    <List>
      <TableComponent
        data={selectFilterAll}
        render={flagRender}
        modal={modal}
      />
    </List>
  );
}

export default ListData;
