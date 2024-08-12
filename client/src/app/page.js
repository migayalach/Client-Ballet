"use client";
// COMPONET'S
import Slider from "@/components/home/slider/Slider";
import Video from "@/components/home/video/Video";
import ListEvents from "@/components/home/listEvents/ListEvents";
import CallData from "@/components/home/callData/CallData";
import Footer from "@/components/home/footer/Footer";

// HOOK'S
import React, { useState, useEffect } from "react";

// LIBRARY
import {
  ClockCircleOutlined,
  TeamOutlined,
  StarOutlined,
} from "@ant-design/icons";

// JAVASCRIP

// STYLESHEET'
import "../stylesheet/page.css";

export default function Home() {
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
    </div>
  );
}
