import React from "react";
import { Alert, Space } from "antd";
import Notification from "../modal/notification/Notification";

function InfoMessage({ dataState: { state, message }, clearLocalState }) {
  return <Notification />;
}

export default InfoMessage;
