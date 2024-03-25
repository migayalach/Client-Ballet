// COMPONET'S

// HOOK'S
import React from "react";

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "./nav-bar.css"

function NavBar() {
  return (
    <div className="conteiner-navbar">
      <div>
        <h3>LOGO</h3>
      </div>
      <div className="conteiner-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/staff">Personal</a>
          </li>
          <li>
            <a href="/student">Estudiantes</a>
          </li>
          <li>
            <a href="/payments">Mensualidades</a>
          </li>
          <li>
            <a href="/hours">Horarios</a>
          </li>
          <li>
            <a href="/class">Clases</a>
          </li>
          <li>
            <a href="/dances">Danzas</a>
          </li>
          <li>
            <a href="/">Salir</a>
          </li>
          <li>
            <a href="">USUARIO</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
