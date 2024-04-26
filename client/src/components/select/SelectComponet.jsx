import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";

const optionList = (list, flag) => {
  switch (flag) {
    case "Level":
      return list.map(({ idLevel, nameLevel }) => ({
        value: idLevel,
        label: nameLevel,
        title: `id${flag}`,
      }));

    case "Extension":
      return list.map(({ idExtension, department }) => ({
        value: idExtension,
        label: department,
        title: `id${flag}`,
      }));

    case "Staff":
      return list.map(({ idStaff, nameStaff, lastNameStaff }) => ({
        value: idStaff,
        label: `${nameStaff} ${lastNameStaff}`,
        title: `id${flag}`,
      }));

    case "TypeClass":
      return list.map(({ idTypeClass, nameClass }) => ({
        value: idTypeClass,
        label: nameClass,
        title: `id${flag}`,
      }));

    case "Hours":
      return list.map(({ idHours, totalTime, stateHours }) => ({
        value: idHours,
        label: `${totalTime} - ${stateHours ? "Habilitado" : "Deshabilitado"}`,
        title: `id${flag}`,
      }));

    default:
      break;
  }
};

function SelectComponet({ list, handleChange, flag, value }) {
  return (
    <Select
      labelInValue
      placeholder={value ? value : "Elije " + flag}
      style={{
        width: 200,
      }}
      onChange={handleChange}
      options={optionList(list, flag)}
    />
  );
}

export default SelectComponet;
