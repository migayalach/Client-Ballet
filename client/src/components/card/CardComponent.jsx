import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;
import { getByIdStaff } from "@/redux/actions";
import ButtonEdit from "../modal/editModal/EditModal";

function CardComponent({ staff }) {
  const dispatch = useDispatch();

  const handleInfo = (idStaff) => {
    dispatch(getByIdStaff(idStaff));
  };

  return (
    <div>
      {staff.map(
        (
          { idStaff, nameStaff, lastNameStaff, carnetStaff, photoStaff },
          index
        ) => (
          <div key={index} onClick={() => handleInfo(idStaff)}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={photoStaff} />}
            >
              <Meta
                title={`${nameStaff} ${lastNameStaff}`}
                description={`Carnet: ${carnetStaff}`}
              />
            </Card>
            <ButtonEdit idData={idStaff} text="editar" render="STAFF" />
          </div>
        )
      )}
    </div>
  );
}

export default CardComponent;
