// COMPONET'S

// HOOK'S
import React from "react";
import Link from "next/link";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "./nav-bar.css";

function NavBar() {
  return (
    <div className="conteiner-navbar">
      <div>
        <h3>LOGO</h3>
      </div>
      <div className="conteiner-menu">
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/staff">Personal</Link>
          </li>
          <li>
            <Link href="/student">Estudiantes</Link>
          </li>
          <li>
            <Link href="/payments">Mensualidades</Link>
          </li>
          <li>
            <Link href="/hours">Horarios</Link>
          </li>
          <li>
            <Link href="/class">Clases</Link>
          </li>
          <li>
            <Link href="/dances">Danzas</Link>
          </li>
          <li>
            <a href="/">Salir</a>
          </li>
          <li>
            <Link href="">USUARIO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
