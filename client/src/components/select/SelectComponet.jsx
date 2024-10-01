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

    case "User":
      return list.map(({ idUser, nameUser, lastNameUser }) => ({
        value: idUser,
        label: `${nameUser} ${lastNameUser}`,
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

    case "Order":
      return [
        { value: " ", label: " ", title: "order" },
        { value: "ASC", label: "ASC", title: "order" },
        { value: "DESC", label: "DESC", title: "order" },
      ];

    case "Type":
      return [
        { value: " ", label: " ", title: "nameOrLastName" },
        { value: "nameUser", label: "Nombre", title: "nameOrLastName" },
        { value: "lastNameUser", label: "Apellido", title: "nameOrLastName" },
      ];

    default:
      return [];
  }
};

function SelectComponet({ list, handleChange, flag, value }) {      
  return !value ? (
    <Select
      labelInValue
      placeholder={value ? value : "Elije " + flag}
      onChange={handleChange}
      options={optionList(list, flag)}
      style={{
        width: 200,
      }}
    />
  ) : (
    <Select
      labelInValue
      placeholder={value ? value : "Elije " + flag}
      onChange={handleChange}
      options={optionList(list, flag, value)}
      style={{
        width: 200,
      }}
      defaultValue={value && value}
    />
  );
}

export default SelectComponet;
