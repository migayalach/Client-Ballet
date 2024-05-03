import React from "react";
import Link from "next/link";
import { Card } from "antd";
const { Meta } = Card;
import ButtonEdit from "../modal/editModal/EditModal";
import { ContactsOutlined } from "@ant-design/icons";
import "./card-component.css";
import ButtonDelete from "../button/buttonDelete/ButtonDelete";
import ButtonRenderId from "../button/buttonRenderId/ButtonRenderId";

function CardComponent({ user }) {
  return (
    <div className="container">
      {user?.map(
        ({ idUser, nameUser, lastNameUser, carnetUser, photoUser }, index) => (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img alt="example" src={photoUser} className="image-photo" />
              }
              actions={[
                <Link href={`/user/${idUser}`}>
                  <ButtonRenderId />
                </Link>,
                <ButtonEdit idData={idUser} text="editar" render="USER" />,
                <ButtonDelete idData={idUser} text="eliminar" render="USER" />,
              ]}
              className="card"
            >
              <Meta
                title={`${nameUser} ${lastNameUser}`}
                description={`Carnet: ${carnetUser}`}
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
