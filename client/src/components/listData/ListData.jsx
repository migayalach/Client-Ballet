import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import TableComponent from "../tableComponent/TableComponent";

const ContainerHeight = 400;

function ListData({ flagRender, modal }) {
  const selectFilterAll = useSelector(({ root }) => root?.filterAll);
  const selectClassStudent = useSelector(({ root }) => root?.student);
  const [data, setData] = useState([]);

  const filterStudents = (list, students) => {
    for (let i = 0; i < students.length; i++) {
      list = list.filter((index) => index.idUser !== students[i].idUser);
    }    
    return list;
  };

  useEffect(() => {
    if (selectFilterAll) {
      setData(filterStudents(selectFilterAll, selectClassStudent));
    }
  }, [selectFilterAll]);

  return (
    <List>
      <TableComponent
        data={data}
        render={flagRender}
        modal={modal}
      />
    </List>
  );
}

export default ListData;
