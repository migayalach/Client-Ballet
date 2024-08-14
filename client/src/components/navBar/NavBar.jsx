"use client";

// COMPONET'S
import LoginModal from "../modal/loginModal/LoginModal";
import EditModal from "../modal/editModal/EditModal";

// HOOK'S
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { MailOutlined, SettingOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "./nav-bar.css";

function NavBar() {
  const [current, setCurrent] = useState("home");
  const selectAccess = useSelector(({ root }) => root?.access);
  const levelUser = selectAccess?.level;
  const handleLogout = async () => await logout();
  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label:
        (levelUser === "Director" || levelUser === "Secretaria") &&
        selectAccess?.access ? (
          <Link href="/user">Usuarios</Link>
        ) : null,
      key: "staff",
      icon:
        (levelUser === "Director" || levelUser === "Secretaria") &&
        selectAccess?.access ? (
          <MailOutlined />
        ) : null,
    },
    {
      label: selectAccess?.access && "Danzas",
      key: "SubMenuDances",
      icon: selectAccess?.access && <SettingOutlined />,
      children: [
        {
          type: "group",
          label:
            (levelUser === "Director" ||
              levelUser === "Secretaria" ||
              levelUser === "Profesor") &&
            "Tipo de danzas",
          children: (levelUser === "Director" ||
            levelUser === "Secretaria" ||
            levelUser === "Profesor") && [
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
            (levelUser === "Director" ||
              levelUser === "Secretaria" ||
              levelUser === "Profesor") && {
              label: <Link href="/qualification">Calificationes</Link>,
              key: "qualications",
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
              label: (
                <EditModal dataUser={selectAccess?.dataUser} render="PROFILE" />
              ),
              key: "editProfile",
            },
            {
              label: "Informacion",
              key: "setting:2",
            },
            {
              label: (
                <a href="/" onClick={handleLogout}>
                  Salir
                </a>
              ),
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

  useEffect(() => {
    const levelUser = selectAccess?.level;
  }, [selectAccess]);

  return (
    <div className="container-navbar">
      <div className="icon-home">
        <Link href="/">
          <HomeOutlined style={{fontSize:"25px", color: "#000"}}/>
        </Link>
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
