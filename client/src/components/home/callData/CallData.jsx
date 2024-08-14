import React from "react";
import "./call-data.css";
import FormContact from "@/components/form/formContact/FormContact";

function CallData() {
  return (
    <div className="call-data-container">
      <p className="title-call">
        NOSOTROS <br />
        TE LLAMAMOS
      </p>
      <div className="container-form">
        <FormContact />
      </div>
      <img
        className="image-background-call-data"
        src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723419832/Ballet/HOME/one.jpg"
        alt="Fondo formulario de contacto"
      />
    </div>
  );
}

export default CallData;
