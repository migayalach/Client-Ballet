import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ListData from "@/components/listData/ListData";
import { useDispatch, useSelector } from "react-redux";
import { filterAll, clearFilterAll } from "@/redux/actions";

function ModalSelect({ render, handleSelect, idUser }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flagRender, setFlagRender] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    dispatch(clearFilterAll());
    setFlagRender("");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(clearFilterAll());
    setFlagRender("");
  };

  const x = (idData, name, flag) => {
    dispatch(clearFilterAll());
    setFlagRender("");
    setIsModalOpen(false);
    handleSelect(idData, name, flag);
  };

  useEffect(() => {
    if (isModalOpen) {
      if (render === "TEACHER-ALL") {
        dispatch(filterAll("all=teacher"));
        setFlagRender("TEACHER");
      }
      if (render === "TYPE-CLASS-ALL") {
        dispatch(filterAll("all=typeClass"));
        setFlagRender("TYPE-CLASS-ALL");
      }
      if (render === "HOURS-ALL") {
        dispatch(filterAll("all=hours"));
        setFlagRender("HOURS-ALL");
      }
      if (render === "CLASS-IDUSER") {
        dispatch(filterAll(idUser));
        setFlagRender("IDUSER-CLASSALL");
      }
    }
  }, [isModalOpen]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        ...
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ListData flagRender={flagRender} modal={x} />
      </Modal>
    </>
  );
}
export default ModalSelect;
