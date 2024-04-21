import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function DateComponent({ onChange, date }) {
  if (date) {
    return (
      <DatePicker
        placeholder={"2010-09-03"}
        name="dateBirthStaff"
        onChange={onChange}
        value={dayjs(date)}
      />
    );
  } else {
    return (
      <DatePicker
        placeholder={"2010-09-03"}
        name="dateBirthStaff"
        onChange={onChange}
      />
    );
  }
}

export default DateComponent;
