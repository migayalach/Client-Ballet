import React from "react";
import { Checkbox } from "antd";

function Check({ checkState, handleChange, name, disabled }) {
  return (
    <div>
      <Checkbox
        checked={checkState}
        onChange={handleChange}
        name={name}
        disabled={disabled}
      />
    </div>
  );
}

export default Check;
