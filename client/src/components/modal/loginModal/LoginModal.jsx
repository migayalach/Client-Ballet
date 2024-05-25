import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import FormLogin from "@/components/form/formLogin/FormLogin";

function LoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGoogle = () => {
    loginWithGoogle();
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        Login
      </Button>

      <Modal
        title="Iniciar sesión"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormLogin />
      </Modal>
    </>
  );
}

export default LoginModal;
