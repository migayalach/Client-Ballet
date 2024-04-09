import React from "react";
import ModalComponent from "../modal/ModalComponent";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

function Create() {
  return (
    <>
      <FloatButton
        icon={<FileAddOutlined />}
        type="primary"
        style={{
          right: 24,
        }}
      />

      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{
          right: 94,
        }}
      />
      <ModalComponent text="Crear"/>
    </>
  );
}

export default Create;
