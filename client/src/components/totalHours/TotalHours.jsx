import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from "antd";
dayjs.extend(customParseFormat);

function TotalHours({ hours, name, handleChange }) {
  const onChange = (time, timeString) => {
    handleChange(name, time, timeString);
  };

  if (name === "total") {
    return <TimePicker value={dayjs(hours, "HH:mm:ss")} disabled />;
  }
  return <TimePicker value={dayjs(hours, "HH:mm:ss")} onChange={onChange} />;
}

export default TotalHours;
