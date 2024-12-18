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
      rows={10}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default AreaText;
