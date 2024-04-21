import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import ButtonEdit from "../modal/editModal/EditModal";

import "./card-component.css";
import ButtonDelete from "../button/buttonDelete/ButtonDelete";

function CardComponent({ staff }) {
  return (
    <div className="container">
      {staff.map(
        (
          { idStaff, nameStaff, lastNameStaff, carnetStaff, photoStaff },
          index
        ) => (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img alt="example" src={photoStaff} className="image-photo" />
              }
              className="card"
            >
              <Meta
                title={`${nameStaff} ${lastNameStaff}`}
                description={`Carnet: ${carnetStaff}`}
                className="card-data"
              />
            </Card>
            <ButtonEdit idData={idStaff} text="editar" render="STAFF" />
            <ButtonDelete idData={idStaff} text="eliminar" render="STAFF"/>
          </div>
        )
      )}
    </div>
  );
}

export default CardComponent;
