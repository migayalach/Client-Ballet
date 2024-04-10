import React, { useState } from "react";
import ModalComponent from "../modal/ModalComponent";
import InfoModal from "../modal/infoModal/InfoModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import FormComponent from "../form/FormComponent";
import CreateModal from "../modal/createModal/CreateModal";

function FloatOption() {
  const [flagAdd, setFlagAdd] = useState(false);
  const [flagInfo, setFlagInfo] = useState(false);

  const handleAdd = () => {
    setFlagAdd(!flagAdd);
  };

  const handleInfo = () => {
    setFlagInfo(!flagInfo);
  };

  return (
    <>
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
      {flagInfo && <InfoModal flag={true} handleInfo={handleInfo} />}
      {flagAdd && <CreateModal flag={true} handleAdd={handleAdd} />}
    </>
  );
}

export default FloatOption;
