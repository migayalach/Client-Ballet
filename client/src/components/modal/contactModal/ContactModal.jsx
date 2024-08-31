import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { ReconciliationOutlined } from "@ant-design/icons";
import ContactForm from "./contactForm/ContactForm";
import { getContactId, removeData } from "@/redux/actions";

function ContactModal({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const selectData = useSelector(({ root }) => root?.data);

  const showModal = () => {
    setIsModalOpen(true);
    dispatch(getContactId(contact));
  };

  const handleOk = () => {
    dispatch(removeData());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    dispatch(removeData());
    setIsModalOpen(false);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <Button type="default" onClick={showModal}>
        <ReconciliationOutlined />
      </Button>
      <Modal
        title="Datos de contacto"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ContactForm data={selectData} />
      </Modal>
    </>
  );
}

export default ContactModal;
