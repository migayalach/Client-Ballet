import React from "react";
import { Switch } from "antd";

function State({ stateHours, handleChange }) {
  return <Switch checked={stateHours} onChange={handleChange} />;
}

export default State;
