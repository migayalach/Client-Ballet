import React from "react";
import { Switch } from "antd";

function State({ stateHours, handleChange }) {
  const handleFlag = (checked) => {
    handleChange("stateHours", "", "", checked);
  };

  return <Switch checked={stateHours} onChange={handleFlag} />;
}

export default State;
