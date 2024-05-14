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
// import { useAuth } from "@/context/authContext";

// STYLESHEET'
import "./nav-bar.css";

function NavBar() {
  // const { logout, user, loading } = useAuth();
  const [current, setCurrent] = useState("home");
  const selectAccess = useSelector(({ root }) => root?.access);
  const handleLogout = async () => await logout();

  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: (
        // selectAccess?.access &&
        <Link href="/user">Usuarios</Link>
      ),
      key: "staff",
      icon: (
        // selectAccess?.access &&
        <MailOutlined />
      ),
    },
    {
      label:
        // selectAccess?.access &&
        "Danzas",
      key: "SubMenuDances",
      icon: (
        // selectAccess?.access &&
        <SettingOutlined />
      ),
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
      label:
        // selectAccess?.access &&
        "Usuario",
      key: "SubMenu",
      icon: (
        // selectAccess?.access &&
        <SettingOutlined />
      ),
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

  // if (loading) return <h1>Loaging</h1>;

  // console.log(user);
  return (
    <div className="container-navbar">
      <div>
        <Link href="/">
          Logo
          {/* {user?.email} */}
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
