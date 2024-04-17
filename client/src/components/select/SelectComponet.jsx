import React from "react";
import { Select } from "antd";

function SelectComponet({ list, handleChange, flag }) {
  const aux =
    flag === "Level"
      ? list.map(({ idLevel, nameLevel }) => ({
          value: idLevel,
          label: nameLevel,
          title: `id${flag}`,
        }))
      : list.map(({ idExtension, department }) => ({
          value: idExtension,
          label: department,
          title: `id${flag}`,
        }));

  return (
    <Select
      labelInValue
      placeholder={"Elije " + flag}
      style={{
        width: 140,
      }}
      onChange={handleChange}
      options={aux}
    />
  );
}

export default SelectComponet;
