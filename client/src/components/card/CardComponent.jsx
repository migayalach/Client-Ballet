import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { Card, Space } from "antd";
const { Meta } = Card;
import ButtonEdit from "../modal/editModal/EditModal";
import "./card-component.css";
import ButtonDelete from "../button/buttonDelete/ButtonDelete";
import ButtonRenderId from "../button/buttonRenderId/ButtonRenderId";

function CardComponent({
  idUser,
  idLevel,
  idExtension,
  nameUser,
  lastNameUser,
  emailUser,
  addressUser,
  dateBirthUser,
  carnetUser,
  numberPhone,
  photoUser,
  stateUser,
}) {
  const [dataUser, setDataUser] = useState({
    idUser,
    idLevel,
    idExtension,
    nameUser,
    lastNameUser,
    emailUser,
    addressUser,
    dateBirthUser,
    carnetUser,
    numberPhone,
    photoUser,
    stateUser,
  });

  useEffect(() => {
    setDataUser({
      idUser,
      idLevel,
      idExtension,
      nameUser,
      lastNameUser,
      emailUser,
      addressUser,
      dateBirthUser,
      carnetUser,
      numberPhone,
      photoUser,
      stateUser,
    });
  }, [
    idUser,
    idLevel,
    idExtension,
    nameUser,
    lastNameUser,
    emailUser,
    addressUser,
    dateBirthUser,
    carnetUser,
    numberPhone,
    photoUser,
    stateUser,
  ]);

  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={photoUser} className="image-photo" />}
        actions={[
          <Space size={65}>
            <Link href={`/user/${idUser}`}>
              <ButtonRenderId />
            </Link>
            <ButtonDelete idData={idUser} text="eliminar" render="USER" />
          </Space>,
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
  );
}

export default CardComponent;
