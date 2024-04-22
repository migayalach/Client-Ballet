import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

function AreaText({ onChange, name, placeholder, value }) {
  return (
    <TextArea
      rows={4}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default AreaText;
