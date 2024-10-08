import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ListData from "@/components/listData/ListData";
import { useDispatch, useSelector } from "react-redux";
import { filterAll, clearFilterAll, filterAllData } from "@/redux/actions";
import "./modal-select.css";

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
        dispatch(filterAllData("teacher"));
        setFlagRender("TEACHER");
      }
      if (render === "TYPE-CLASS-ALL") {
        dispatch(filterAllData("typeDance"));
        setFlagRender("TYPE-CLASS-ALL");
      }
      if (render === "HOURS-ALL") {
        dispatch(filterAllData("hours"));
        setFlagRender("HOURS-ALL");
      }
      if (render === "CLASS-IDUSER") {
        dispatch(filterAll(idUser));
        setFlagRender("IDUSER-CLASSALL");
      }
      if (render === "STUDEN-ALL") {
        dispatch(filterAll("all=student"));
        setFlagRender("STUDENT-ALL");
      }
    }
  }, [isModalOpen]);

  return (
    <div>
      <Button type="primary" onClick={showModal} className="distance-button">
        ...
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={620} 
      >
        <ListData flagRender={flagRender} modal={x} />
      </Modal>
    </div>
  );
}
export default ModalSelect;
