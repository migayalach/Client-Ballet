import React from "react";
import { Alert, Space } from "antd";

function InfoMessage({ dataState: { state, message }, clearLocalState }) {
  console.log(state);
  
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      {/* POSIBLES 4 ESTADOS
    create
    delete
    update
    error */}

      {/* {(message === "No se puede agregar numeros negativos" && (
        <Alert message={message} type="error" showIcon />
      )) ||
        (message === "Se sumo correctamente...!" && (
          <Alert message={message} type="success" showIcon />
        )) ||
        (message === "Se resto correctamente...!" && (
          <Alert message={message} type="info" showIcon />
        ))} */}
      {state === "create" && (
        <Alert message={`Creado ${message}`} type="success" showIcon />
      )}

    </Space>
  );
}

export default InfoMessage;
