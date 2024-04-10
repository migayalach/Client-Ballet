import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from "antd";
dayjs.extend(customParseFormat);

function TotalHours({ flag, hours, name, handleChange }) {
  const [data, setData] = useState("00:00:00");

  const onChange = (time, totalString) => {
    setData(totalString);
    handleChange(name, "", totalString);
  };

  useEffect(() => {
    hours && setData(hours); 
  }, [hours]);

  if (flag === "total") {
    return <TimePicker value={dayjs(data, "HH:mm:ss")} disabled />;
  }
  return <TimePicker value={dayjs(data, "HH:mm:ss")} onChange={onChange} />;
}

export default TotalHours;
