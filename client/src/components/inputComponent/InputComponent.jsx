import React from "react";
import { Input } from "antd";
import { nameRules } from "@/components/form/validation/validationRules";

function InputComponent({ onChange, name, placeholder, data }) {
  return (
    <Input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={data}
      type={name === "calification" ? "number" : "string"}
    />
  );
}

export default InputComponent;
