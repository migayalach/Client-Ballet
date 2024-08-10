"use client";
// COMPONET'S
import React, { useState, useEffect } from "react";

// HOOK'S

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'
import "../stylesheet/page.css";


export default function Home() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  // Cargar datos de localStorage cuando el componente se monta
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    console.log("Datos cargados de localStorage:", savedData);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setData(parsedData);
    }
  }, []);

  // Guardar datos en localStorage cuando 'data' cambia
  useEffect(() => {
    console.log("Guardando datos en localStorage:", data);
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="container-body">
        <h1>Body</h1>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
      <div>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <br />
    </div>
  );
}
