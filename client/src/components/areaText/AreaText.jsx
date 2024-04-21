import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

function AreaText({ onChange, value }) {
  return (
    <TextArea
      rows={4}
      onChange={onChange}
      name="addressStaff"
      placeholder="Calle Siempre Viva N°666"
      value={value}
    />
  );
}

export default AreaText;
