import React, { useState, useEffect } from "react";
import { Avatar, List } from "antd";
import { getIdAllClassStudent } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";

function ListStudents({ idClass }) {
  const dispatch = useDispatch();
  const selectClassStudent = useSelector(({ root }) => root?.student);
  const data = selectClassStudent.map(
    ({
      idUser,
      idClass,
      nameUser,
      lastNameUser,
      carnetUser,
      department,
      photoUser,
      stateUser,
    }) => ({
      idUser,
      idClass,
      title: `${nameUser} ${lastNameUser} ${carnetUser} ${department}`,
      photoUser,
      stateUser,
    })
  );

  useEffect(() => {
    dispatch(getIdAllClassStudent(idClass));
  }, []);

  return (
    <>
      <List
        pagination={false}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <a key="list-loadmore-more">estado{item.idUser}</a>,
              <a key="list-loadmore-edit">calificaciones</a>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={`${item.photoUser}`} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default ListStudents;
