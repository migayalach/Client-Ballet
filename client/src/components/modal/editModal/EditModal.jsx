// COMPONET'S
import FormHours from "@/components/form/formHours/FormHours";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button } from "antd";

// LIBRARY

//REDUX
import { removeData } from "@/redux/actions";
import FormStaff from "@/components/form/formStaff/FormStaff";
import FormTypeClass from "@/components/form/formTypeClass/FormTypeClass";
import FormClass from "@/components/form/formClass/FormClass";
import FormStudent from "@/components/form/formStudent/FormStudent";

// JAVASCRIP

// STYLESHEET'

function EditModal({ idData, text, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(removeData());
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(removeData());
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Text text={text} />
      </Button>

      <Modal
        title="Editar informacion"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {render === "STAFF" && <FormStaff idData={idData} option="edit" />}
        {render === "HOURS" && <FormHours idData={idData} option="edit" />}
        {render === "TYPE-CLASS" && (
          <FormTypeClass idData={idData} option="edit" />
        )}
        {render === "CLASS" && <FormClass idData={idData} option="edit" />}
        {render === "STUDENT" && <FormStudent idData={idData} option="edit" />}
      </Modal>
    </>
  );
}

export default EditModal;
