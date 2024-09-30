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
import { infoClear, removeError } from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "../stylesheet/page.css";

export default function Home() {
  const dispatch = useDispatch();
  const [dataState, setDataState] = useState({ state: null, message: "" });
  const [flagAlert, setFlagAlert] = useState(false);
  const selectInfo = useSelector(({ root }) => root.info);
  const selectState = useSelector(({ root }) => root?.state);
  const selectError = useSelector(({ root }) => root?.error);
  const selectAccess = useSelector(({ root }) => root?.access);
  const selectAux = useSelector(({ root }) => root?.aux);

  const clearLocalState = () => {
    setDataState({
      state: null,
      message: "",
    });
    setFlagAlert(false);
  };

  useEffect(() => {
    if (selectAux === "Registrado con exito" && selectState === "success") {
      setDataState({
        state: selectState,
        message: `${selectAux}`,
      });
    } else if (Object.keys(selectAccess).length && selectState.length) {
      setDataState({
        state: selectState,
        message: `Bienvenido ${selectAccess.name}`,
      });
    } else if (selectError !== null) {
      setDataState({
        state: "error",
        message: selectError?.message,
      });
    }
    setFlagAlert(true);
    return () => {};
  }, [selectAccess, selectState, selectError, selectAux]);

  useEffect(() => {
    dispatch(infoClear());
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
