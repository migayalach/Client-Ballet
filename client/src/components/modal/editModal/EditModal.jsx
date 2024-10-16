// COMPONENTS
import FormHours from "@/components/form/formHours/FormHours";
import Text from "@/components/text/Text";
import FormUser from "@/components/form/formUser/FormUser";
import FormTypeClass from "@/components/form/formTypeClass/FormTypeClass";
import FormClass from "@/components/form/formClass/FormClass";
import FormPassword from "@/components/form/formUser/formPassword/FormPassword";

// HOOKS
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";

// REDUX ACTIONS
import {
  removeData,
  stateFlag,
  getByIdClass,
  getByIdUser,
} from "@/redux/actions";

// COMPONENT
function EditModal({ idData, dataUser, text, render }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectState = useSelector(({ root }) => root?.state);
  const selectFilter = useSelector(({ root }) => root?.filter);
  const selectDataUser = useSelector(({ root }) => root?.access);
  console.log(idData, dataUser, text, render);

  const showModal = () => {
    setIsModalOpen(true);
    if (render === "PROFILE") {
      dispatch(getByIdUser(selectDataUser?.idUser));
    }
    if (render === "CLASS") {
      dispatch(getByIdClass(idData));
    }
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
    if (
      render === "HOURS" &&
      selectState === "editHours" &&
      selectFilter.length
    ) {
      setIsModalOpen(false);
      dispatch(removeData());
    }
  }, [selectState]);

  useEffect(() => {
    if (render === "CLASS" && isModalOpen) {
      dispatch(getByIdClass(idData));
    }
    return () => {};
  }, [isModalOpen]);

  useEffect(() => {
    if (render === "TYPE-CLASS") {
      showModal();
    }
  }, [render]);

  return (
    <>
      {render === "PROFILE" && <p onClick={showModal}>Editar Perfil</p>}
      {render === "PASSWORD" && <p onClick={showModal}>Editar Contraseña</p>}

      <Modal
        title="Editar Información"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {render === "USER" && <FormUser dataUser={dataUser} option="edit" />}
        {render === "PROFILE" && <FormUser option="editProfile" />}
        {render === "HOURS" && <FormHours idData={idData} option="edit" />}
        {render === "CLASS" && <FormClass idData={idData} option="edit" />}
        {render === "TYPE-CLASS" && (
          <FormTypeClass idData={idData} option="editTypeClass" />
        )}
        {render === "PASSWORD" && <FormPassword handleOk={handleOk} />}
      </Modal>
    </>
  );
}

export default EditModal;
