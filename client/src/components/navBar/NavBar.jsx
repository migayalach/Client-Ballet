"use client";

// COMPONET'S
import LoginModal from "../modal/loginModal/LoginModal";
import EditModal from "../modal/editModal/EditModal";

// HOOK'S
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

// LIBRARY
import {
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  AuditOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Menu, Col, Row } from "antd";
import { render } from "react-dom";

//REDUX

// JAVASCRIP

// STYLESHEET'
// import "./nav-bar.css";

function NavBar() {
  const [current, setCurrent] = useState("home");
  const selectAccess = useSelector(({ root }) => root?.access);
  const levelUser = selectAccess?.level;
  const pathname = usePathname();

  const route = pathname.slice(0, 6);

  // console.log(pathname /user/);

  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: <Link href="/events">Eventos</Link>,
      key: "events",
      icon: <StarOutlined />,
    },
    ...(levelUser === "Director" || levelUser === "Secretaria"
      ? [
          {
            label: <Link href="/send">Contactos</Link>,
            key: "contacts",
            icon: <AuditOutlined />,
          },
          {
            label: <Link href="/user">Usuarios</Link>,
            key: "staff",
            icon: <MailOutlined />,
          },
        ]
      : []),

    ...(levelUser === "Director" ||
    levelUser === "Secretaria" ||
    levelUser === "Profesor" ||
    levelUser === "Estudiante"
      ? [
          {
            label: Object.keys(selectAccess).length && "Danzas",
            key: "SubMenuDances",
            icon: Object.keys(selectAccess).length && <SettingOutlined />,
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
                  ...(levelUser === "Director" ||
                  levelUser === "Secretaria" ||
                  levelUser === "Profesor"
                    ? [
                        {
                          label: (
                            <Link href="/qualification">Calificationes</Link>
                          ),
                          key: "qualications",
                        },
                      ]
                    : []),
                  {
                    label: <Link href="/hours">Horarios</Link>,
                    key: "hours",
                  },
                ],
              },
            ],
          },
        ]
      : []),

    ...(Object.keys(selectAccess).length
      ? [
          {
            label: "Usuario",
            key: "SubMenu",
            icon: <SettingOutlined />,
            children: [
              {
                type: "group",
                label: "Opciones",
                children: [
                  ...(route !== "/user/"
                    ? [
                        {
                          label: <EditModal render="PROFILE" />,
                          key: "editProfile",
                        },
                      ]
                    : []),
                  {
                    label: <EditModal render="PASSWORD" />,
                    key: "changePassword",
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
        ]
      : []),
    ...(!Object.keys(selectAccess).length
      ? [
          {
            label: <LoginModal />,
            key: "login",
            icon: <MailOutlined />,
          },
        ]
      : []),
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {}, [selectAccess]);

  return (
    <Col>
      <Row
        justify="space-between"
        align="middle"
        style={{ display: "flex", width: "100%" }}
      >
        <Link href="/">
          <HomeOutlined
            style={{ fontSize: "25px", color: "#000", padding: "10px" }}
          />
        </Link>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{ flex: 1, justifyContent: "flex-end" }}
        />
      </Row>
    </Col>
  );
}

export default NavBar;
