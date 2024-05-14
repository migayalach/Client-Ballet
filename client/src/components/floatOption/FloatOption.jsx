import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import CreateModal from "../modal/createModal/CreateModal";

function FloatOption({ render, idClass }) {
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
      <FloatButton
        icon={<FileAddOutlined />}
        type="primary"
        style={{
          right: 24,
        }}
        onClick={() => handleAdd()}
      />

      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{
          right: 94,
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
        />
      )}
    </div>
  );
}

export default FloatOption;
