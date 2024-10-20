"use client";
// COMPONET'S
import Slider from "@/components/home/slider/Slider";
import Video from "@/components/home/video/Video";
import ListEvents from "@/components/home/listEvents/ListEvents";
import CallData from "@/components/home/callData/CallData";
import Footer from "@/components/home/footer/Footer";
import Notification from "@/components/modal/notification/Notification";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import {
  ClockCircleOutlined,
  TeamOutlined,
  StarOutlined,
} from "@ant-design/icons";

// REDUX
import {
  infoClear,
  getLevelAll,
  getExtensionAll,
  assitanceClear,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "../stylesheet/page.css";

export default function Home() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({});
  const [flagAlert, setFlagAlert] = useState(false);
  const selectInfo = useSelector(({ root }) => root.info);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectSuccess = useSelector(({ root }) => root?.success);

  const clearLocalState = () => {
    setDataState({});
    setFlagAlert(false);
  };

  useEffect(() => {
    if (selectState === "login") {
      setDataState({
        state: selectState,
        message: `Bienvenido ${selectAccess.name}`,
      });
    } else if (Object.keys(selectSuccess).length && selectError === null) {
      if (selectSuccess.action === "create-contact") {
        setDataState({ ...selectSuccess });
      }
    } else if (selectError !== null) {
      if (selectError.message === "Contraseña incorrecta") {
        setDataState({
          message: selectError?.message,
          state: "error",
          action: "error-login",
        });
      } else if (
        selectError.error === "Este email ya se encuentra registrado!"
      ) {
        setDataState({
          message: selectError?.error,
          state: "error",
          action: "error-create-contact",
        });
      }
    }
    setFlagAlert(true);
    return () => {};
  }, [selectSuccess, selectAccess, selectError, selectState]);

  useEffect(() => {
    dispatch(infoClear());
    dispatch(assitanceClear());
  }, [selectInfo]);

  return (
    <div className="container-app">
      <div className="slider">
        <Slider />
      </div>
      <div className="box-info">
        <div className="container-message">
          <i className="icon">
            <ClockCircleOutlined />
          </i>
          <div>
            <p className="text-message">HORARIOS</p>
            <p className="text-message">FLEXIBLES</p>
          </div>
        </div>
        <div className="container-message">
          <i className="icon">
            <TeamOutlined />
          </i>
          <div>
            <p className="text-message">CLASES</p>
            <p className="text-message">DINAMICAS</p>
          </div>
        </div>
        <div className="container-message">
          <i className="icon">
            <StarOutlined />
          </i>
          <div>
            <p className="text-message">COSTOS</p>
            <p className="text-message">PREFERENCIALES</p>
          </div>
        </div>
      </div>
      <div className="video">
        <Video />
      </div>
      <div className="list-events">
        <ListEvents />
      </div>
      <div className="call-data">
        <CallData />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div>
        {flagAlert && (
          <Notification
            dataState={dataState}
            clearLocalState={clearLocalState}
          />
        )}
      </div>
    </div>
  );
}
