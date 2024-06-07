import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import CreateModal from "../modal/createModal/CreateModal";
import QualificationModal from "../modal/qualificationModal/QualificationModal";
import {
  QuestionCircleOutlined,
  FileAddOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";

function FloatOption({ render, idClass }) {
  const [flagAdd, setFlagAdd] = useState(false);
  const [flagInfo, setFlagInfo] = useState(false);
  const [flagQualification, setFlagQualification] = useState(false);

  const handleAdd = () => {
    setFlagAdd(!flagAdd);
  };

  const handleInfo = () => {
    setFlagInfo(!flagInfo);
  };

  const handleQualification = () => {
    setFlagQualification(!flagQualification);
  };

  return (
    <div className="conteiner">
      <FloatButton
        icon={<FileAddOutlined />}
        tooltip={<div>Nuevo</div>}
        type="primary"
        style={{
          right: 10,
          bottom: 20,
        }}
        onClick={() => handleAdd()}
      />

      <FloatButton
        icon={<QuestionCircleOutlined />}
        tooltip={<div>Información</div>}
        type="primary"
        style={{
          right: 80,
          bottom: 20,
        }}
        onClick={() => handleInfo()}
      />

      {idClass > 0 && (
        <FloatButton
          icon={<CopyOutlined />}
          tooltip={<div>Nueva calificación</div>}
          type="primary"
          style={{
            right: 150,
            bottom: 20,
          }}
          onClick={() => handleQualification()}
        />
      )}

      {flagQualification && (
        <QualificationModal
          idClass={idClass}
          flag={true}
          handleQualification={handleQualification}
        />
      )}

      {flagInfo && (
        <InfoModal flag={true} handleInfo={handleInfo} render={render} />
      )}

      {flagAdd && (
        <CreateModal
          flag={true}
          handleAdd={handleAdd}
          render={render}
          idClass={idClass}
        />
      )}
    </div>
  );
}

export default FloatOption;
