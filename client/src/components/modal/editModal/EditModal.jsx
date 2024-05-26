// COMPONET'S
import FormHours from "@/components/form/formHours/FormHours";
import Text from "@/components/text/Text";
import FormUser from "@/components/form/formUser/FormUser";
import FormTypeClass from "@/components/form/formTypeClass/FormTypeClass";
import FormClass from "@/components/form/formClass/FormClass";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "antd";

// LIBRARY
import { EditOutlined } from "@ant-design/icons";

//REDUX
import { removeData, stateFlag } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function EditModal({ idData, dataUser, text, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectState = useSelector(({ root }) => root?.state);
  const selectFilter = useSelector(({ root }) => root?.filter);
  const showModal = () => {
    setIsModalOpen(true);
    render === "PROFILE" && dispatch(stateFlag("editProfile"));
  };

  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(removeData());
    dispatch(stateFlag(""));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(removeData());
    dispatch(stateFlag(""));
  };

  useEffect(() => {
    if (render === "HOURS" && selectState === "edit" && selectFilter.length) {
      setIsModalOpen(false);
      dispatch(removeData());
    }
  }, [selectState]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <EditOutlined key="edit" />
      </Button>

      <Modal
        title="Editar informacion"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {render === "USER" && <FormUser dataUser={dataUser} option="edit" />}
        {render === "PROFILE" && (
          <FormUser dataUser={dataUser} option="editProfile" />
        )}
        {render === "HOURS" && <FormHours idData={idData} option="edit" />}
        {render === "CLASS" && <FormClass idData={idData} option="edit" />}
        {render === "TYPE-CLASS" && (
          <FormTypeClass idData={idData} option="edit" />
        )}
      </Modal>
    </>
  );
}

export default EditModal;
