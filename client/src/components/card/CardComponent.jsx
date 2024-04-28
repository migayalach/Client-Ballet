import React from "react";
import Link from "next/link";
import { Card } from "antd";
const { Meta } = Card;
import ButtonEdit from "../modal/editModal/EditModal";
import { ContactsOutlined } from "@ant-design/icons";
import "./card-component.css";
import ButtonDelete from "../button/buttonDelete/ButtonDelete";
import ButtonRenderId from "../button/buttonRenderId/ButtonRenderId";

function CardComponent({ staff, student }) {
  return (
    <div className="container">
      {staff?.map(
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
              actions={[
                <Link href={`/staff/${idStaff}`}>
                  <ButtonRenderId />
                </Link>,
                <ButtonEdit idData={idStaff} text="editar" render="STAFF" />,
                <ButtonDelete
                  idData={idStaff}
                  text="eliminar"
                  render="STAFF"
                />,
              ]}
              className="card"
            >
              <Meta
                title={`${nameStaff} ${lastNameStaff}`}
                description={`Carnet: ${carnetStaff}`}
                className="card-data"
              />
            </Card>
          </div>
        )
      )}
      {student?.map(
        (
          {
            idStudent,
            nameStudent,
            lastNameStudent,
            carnetStudent,
            codeStudent,
            photoStudent,
            stateStudent,
          },
          index
        ) => (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img alt="example" src={photoStudent} className="image-photo" />
              }
              actions={[
                <ContactsOutlined key="setting" />,
                <ButtonEdit
                  idData={idStudent}
                  text="editar"
                  render="STUDENT"
                />,
                <ButtonDelete
                  idData={idStudent}
                  text="eliminar"
                  render="STUDENT"
                />,
              ]}
              className="card"
            >
              <Meta
                title={`${nameStudent} ${lastNameStudent}`}
                description={`Carnet: ${carnetStudent}`}
                className="card-data"
              />
            </Card>
          </div>
        )
      )}
    </div>
  );
}

export default CardComponent;
