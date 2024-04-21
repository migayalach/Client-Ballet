import React from "react";
import { Input } from "antd";

function InputComponent({ onChange, name, placeholder, data }) {
  return (
    <Input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={data}
    />
  );
}

export default InputComponent;
