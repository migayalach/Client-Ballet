import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import ListData from "@/components/listData/ListData";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAll,
  clearFilterAll,
  filterAllData,
  filterAllDataIds,
  filterAllCourseIdUser,
} from "@/redux/actions";
import "./modal-select.css";

function ModalSelect({ render, handleSelect, idUser, idClass }) {
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
        dispatch(filterAllDataIds(idClass, "students"));
        setFlagRender("STUDENT-ALL");
      }
      if (render === "IDSTUDEN-ALL-CLASS") {
        dispatch(filterAllCourseIdUser(idUser, "course"));
        setFlagRender("IDSTUDEN-ALL-CLASS");
      }
    }
  }, [isModalOpen]);

  return (
    <div>
      <Button type="primary" onClick={showModal} className="distance-button">
        ...
      </Button>
      <Modal
        title="Informacion"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={675}
      >
        <ListData flagRender={flagRender} modal={x} />
      </Modal>
    </div>
  );
}
export default ModalSelect;
