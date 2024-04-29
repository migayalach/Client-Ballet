import React from "react";
import { Alert, Space } from "antd";

function infoMessage({ message }) {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      {(message === "No se puede agregar numeros negativos" && (
        <Alert message={message} type="error" showIcon />
      )) ||
        (message === "Se sumo correctamente...!" && (
          <Alert message={message} type="success" showIcon />
        )) ||
        (message === "Se resto correctamente...!" && (
          <Alert message={message} type="info" showIcon />
        ))}
    </Space>
  );
}

export default infoMessage;
