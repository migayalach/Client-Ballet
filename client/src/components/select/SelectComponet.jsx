import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";

const xxx = (list, flag) => {
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
  return aux;
};

function SelectComponet({ list, handleChange, flag, value }) {
  const abc = {
    value: 0,
    label: value,
  };

  if (!value) {
    return (
      <Select
        labelInValue
        placeholder={"Elije " + flag}
        style={{
          width: 140,
        }}
        onChange={handleChange}
        options={xxx(list, flag)}
      />
    );
  } else {
    return (
      <Select
        labelInValue
        placeholder={"Elije " + flag}
        style={{
          width: 140,
        }}
        onChange={handleChange}
        options={xxx(list, flag)}
        value={value && abc}
      />
    );
  }
}

export default SelectComponet;
