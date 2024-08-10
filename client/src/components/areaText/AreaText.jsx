// HOOK'S
import React from "react";

// LIBRARY
import { Input } from "antd";

// JAVASCRIP

// STYLESHEET'

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
