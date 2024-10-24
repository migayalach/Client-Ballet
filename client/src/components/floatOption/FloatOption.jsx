import React, { useState } from "react";
import InfoModal from "../modal/infoModal/InfoModal";
import CreateModal from "../modal/createModal/CreateModal";
import { QuestionCircleOutlined, FileAddOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

function FloatOption({ render, idClass, nameLevel, idUser, access, event }) {
  // console.log(render, idClass, nameLevel, idUser, access);

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
      {/* <div>
        {render === "LIST-ASSISTANCE-IDCLASS" && (
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
      </div> */}

      <div>
        {/* {render !== "QUALIFICATION" &&
          (access === "Director" || access === "Secretaria") && <p></p>} */}
        {(access === "Director" || access === "Secretaria") && (
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

      {/* <div>
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
      </div> */}

      {/* <div>
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
      </div> */}

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
