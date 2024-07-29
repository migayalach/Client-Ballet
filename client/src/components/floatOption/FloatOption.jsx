import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import CreateModal from "../modal/createModal/CreateModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

function FloatOption({ render, idClass, nameLevel, idUser, access }) {
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
      {render !== "QUALIFICATION" &&
        (access === "Director" || access === "Secretaria") && (
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
        )}

      {(access === "Secretatia" || access === "Director") &&
        render === "CLASS-STUDENT" && (
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
        )}

      {access === "Profesor" && render === "QUALIFICATION" && (
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
      )}

      {
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
      }

      {flagInfo && (
        <InfoModal
          flag={true}
          handleInfo={handleInfo}
          render={render}
          access={access}
        />
      )}

      {flagAdd && (
        <CreateModal
          flag={true}
          handleAdd={handleAdd}
          render={render}
          idClass={idClass}
          idUser={idUser}
          access={access}
        />
      )}
    </div>
  );
}

export default FloatOption;
