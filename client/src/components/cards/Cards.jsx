import React from "react";
import CardComponent from "../card/CardComponent";
import "./cards.css";

function Cards({ user }) {
  return (
    <div className="container">
      {user?.map(
        (
          {
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
          },
          index
        ) => {
          return (
            <CardComponent
              key={index}
              idUser={idUser}
              idLevel={idLevel}
              idExtension={idExtension}
              nameUser={nameUser}
              lastNameUser={lastNameUser}
              emailUser={emailUser}
              addressUser={addressUser}
              dateBirthUser={dateBirthUser}
              carnetUser={carnetUser}
              numberPhone={numberPhone}
              photoUser={photoUser}
              stateUser={stateUser}
            />
          );
        }
      )}
    </div>
  );
}

export default Cards;
