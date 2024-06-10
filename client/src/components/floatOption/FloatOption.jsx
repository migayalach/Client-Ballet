import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import CreateModal from "../modal/createModal/CreateModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

function FloatOption({ render, idClass, nameLevel, idUser }) {
  const [flagAdd, setFlagAdd] = useState(false);
  const [flagInfo, setFlagInfo] = useState(false);

  const handleAdd = () => {
    setFlagAdd(!flagAdd);
  };

  const handleInfo = () => {
    setFlagInfo(!flagInfo);
  };

  return (
    <div className="conteiner">
      {/* {(nameLevel === "Profesor" || nameLevel === "Director") && ( */}
        <FloatButton
          icon={<FileAddOutlined />}
          tooltip={<div>Nuevo</div>}
          type="primary"
          style={{
            right: 80,
            bottom: 20,
          }}
          onClick={() => handleAdd()}
        />
      {/* )} */}

      <FloatButton
        icon={<QuestionCircleOutlined />}
        tooltip={<div>Información</div>}
        type="primary"
        style={{
          right: 10,
          bottom: 20,
        }}
        onClick={() => handleInfo()}
      />

      {flagInfo && (
        <InfoModal flag={true} handleInfo={handleInfo} render={render} />
      )}

      {flagAdd && (
        <CreateModal
          flag={true}
          handleAdd={handleAdd}
          render={render}
          idClass={idClass}
          idUser={idUser}
        />
      )}
    </div>
  );
}

export default FloatOption;
