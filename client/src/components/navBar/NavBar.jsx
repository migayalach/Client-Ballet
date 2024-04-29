"use client";

// COMPONET'S
import LoginModal from "../modal/loginModal/LoginModal";

// HOOK'S
import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "./nav-bar.css";

function NavBar() {
  const [current, setCurrent] = useState("home");
  const selectAccess = useSelector(({ root }) => root?.access);
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: selectAccess?.access && <Link href="/staff">Personal</Link>,
      key: "staff",
      icon: selectAccess?.access && <MailOutlined />,
    },
    {
      label: selectAccess?.access && <Link href="/student">Estudiantes</Link>,
      key: "student",
      icon: selectAccess?.access && <MailOutlined />,
    },
    {
      label: selectAccess?.access && "Danzas",
      key: "SubMenuDances",
      icon: selectAccess?.access && <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Tipo de danzas",
          children: [
            {
              label: <Link href="typeClass">Tipo de clases</Link>,
              key: "typeClass",
            },
          ],
        },
        {
          type: "group",
          label: "Clases",
          children: [
            {
              label: <Link href="/class">Clases</Link>,
              key: "class",
            },
            {
              label: <Link href="/hours">Horarios</Link>,
              key: "hours",
            },
          ],
        },
      ],
    },
    {
      label: selectAccess?.access && "Usuario",
      key: "SubMenu",
      icon: selectAccess?.access && <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Opciones",
          children: [
            {
              label: "Perfil",
              key: "setting:1",
            },
            {
              label: "Informacion",
              key: "setting:2",
            },
            {
              label: <a href="/">Salir</a>,
              key: "out",
            },
          ],
        },
      ],
    },
    {
      label: !Object.keys(selectAccess).length && <LoginModal />,
      key: "login",
      icon: !Object.keys(selectAccess).length && <MailOutlined />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="container-navbar">
      <div>
        <Link href="/">Logo</Link>
      </div>
      <div className="container-menu">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
    </div>
  );
}

export default NavBar;
