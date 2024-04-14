"use client";

// COMPONET'S

// HOOK'S
import React, { useState } from "react";
import Link from "next/link";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "./nav-bar.css";
import {
  HomeOutlined,
  UsergroupDeleteOutlined,
  IdcardOutlined,
  ExceptionOutlined,
  AppstoreOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: <Link href="/home">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/staff">Personal</Link>,
    key: "personal",
    icon: <UsergroupDeleteOutlined />,
  },
  {
    label: "Estudiantes",
    key: "estudiantes",
    icon: <IdcardOutlined />,
  },
  {
    label: "Mensualidades",
    key: "mensualidades",
    icon: <ExceptionOutlined />,
  },
  {
    label: "Clases",
    key: "clases",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Danzas",
    key: "danzas",
    icon: <ProductOutlined />,
  },
  {
    label: "Usuario",
    key: "usuario",
    icon: <UserOutlined />,
    children: [
      {
        type: "group",
        label: "Opciones de usuario",
        children: [
          {
            label: "Editar Usuario",
            key: "usuarioInfo",
            path: "/user",
          },
          {
            label: "Salir",
            key: "salir",
            path: "/salir",
          },
        ],
      },
    ],
  },
];

function NavBar() {
  const [current, setCurrent] = useState("home");
  const onClick = ({ key }) => {
    console.log(key);
    setCurrent(key);
  };

  // return (
  //   <div className="conteiner-navbar">
  //     <div>
  //       <h3>LOGO</h3>
  //     </div>
  //     <div className="conteiner-menu">
  //       <ul>
  //         <li>
  //           <Link>Home</Link>
  //         </li>
  //         <li>
  //           <Link href="/staff">Personal</Link>
  //         </li>
  //         <li>
  //           <Link href="/student">Estudiantes</Link>
  //         </li>
  //         <li>
  //           <Link href="/payments">Mensualidades</Link>
  //         </li>
  //         <li>
  //           <Link href="/hours">Horarios</Link>
  //         </li>
  //         <li>
  //           <Link href="/class">Clases</Link>
  //         </li>
  //         <li>
  //           <Link href="/dances">Danzas</Link>
  //         </li>
  //         <li>
  //           <a href="/">Salir</a>
  //         </li>
  //         <li>
  //           <Link href="">USUARIO</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <div className="conteiner-navbar">
      <div>
        <h3>LOGO</h3>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}

export default NavBar;
