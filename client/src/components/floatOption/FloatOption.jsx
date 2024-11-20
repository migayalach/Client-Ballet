import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import CreateModal from "../modal/createModal/CreateModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

function FloatOption({ render, idClass, nameLevel, idUser, access, event }) {
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
      <div>
        {((access === "Director" && render !== "QUALIFICATION") ||
          (access === "Secretaria" && render !== "QUALIFICATION") ||
          (access === "Profesor" && render === "LIST-ASSISTANCE-IDCLASS") ||
          (access === "Profesor" && render === "QUALIFICATION")) && (
          <>
            <FloatButton
              icon={<FileAddOutlined />}
              tooltip={<div>{`${event === "edit" ? "Editar" : "Nuevo"}`}</div>}
              type="primary"
              style={{
                right: 80,
                bottom: 20,
              }}
              onClick={() => handleAdd()}
            />
          </>
        )}
      </div>

      {/* TODO: MODAL INFORMACION */}
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

      {/* TODO: OPCINES */}
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
          event={event}
        />
      )}
    </div>
  );
}

export default FloatOption;
