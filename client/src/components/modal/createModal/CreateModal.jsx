import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import FormHours from "@/components/form/formHours/FormHours";
import FormUser from "@/components/form/formUser/FormUser";
import FormTypeClass from "@/components/form/formTypeClass/FormTypeClass";
import FormClass from "@/components/form/formClass/FormClass";
import FormClassStudent from "@/components/form/formClassStudent/FormClassStudent";
import FormQualification from "@/components/form/formQualification/FormQualification";
import { optionMessageModal } from "../optionMessage";
import FormAssistance from "@/components/form/formAssistance/FormAssistance";

function CreateModal({ flag, handleAdd, render, idClass, idUser, access }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { dataUser } = useSelector(({ root }) => root?.access);
  const handleOk = () => {
    setIsModalOpen(false);
    handleAdd(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    handleAdd(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    handleAdd;
  }, [flag]);

  return (
    <>
      <Modal
        title={`${optionMessageModal(render)}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {(access === "Secretaria" || access === "Director") &&
          render === "USER" && (
            <FormUser option="create" handleState={handleOk} />
          )}

        {render === "TYPE-CLASS" && (
          <FormTypeClass option="create" handleState={handleOk} />
        )}

        {render === "HOURS" && (
          <FormHours option="create" handleState={handleOk} />
        )}

        {render === "CLASS" && (
          <FormClass
            option="create"
            handleState={handleOk}
            idUserCreate={dataUser.idUser}
          />
        )}
        {render === "CLASS-STUDENT" && (
          <FormClassStudent
            option="create"
            handleState={handleOk}
            idClass={idClass}
          />
        )}
        {render === "QUALIFICATION" && (
          <FormQualification
            option="create"
            handleState={handleOk}
            idUser={idUser}
          />
        )}
        {render === "LIST-ASSISTANCE-IDCLASS" && (
          <FormAssistance option="create" handleState={handleOk} />
        )}
      </Modal>
    </>
  );
}

export default CreateModal;
