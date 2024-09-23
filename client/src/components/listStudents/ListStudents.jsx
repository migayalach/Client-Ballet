import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import { getIdAllClassStudent } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../tableComponent/TableComponent";

function ListStudents({ idClass, access }) {
  const dispatch = useDispatch();
  const selectClassStudent = useSelector(({ root }) => root?.student);
  // const selectInfo = useSelector((state) => state.root.info);
  // const selectFilter = useSelector((state) => state.root?.filter);
  // const selectAccess = useSelector(({ root }) => root?.access);

  const handleDelete = (idClass, idUser) => {
    alert(`${idClass}, ${idUser}`);
  };

  useEffect(() => {
    dispatch(getIdAllClassStudent(idClass));
  }, []);

  return (
    <>
      <TableComponent
        data={selectClassStudent.length ? selectClassStudent : selectFilter}
        render="LIST-STUDENT-CLASS"
        access={access}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default ListStudents;
