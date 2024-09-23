"use client";
import React, { useState, useEffect } from "react";

function page({ params }) {
  const { infoQualification } = params;
  const [data, setData] = useState({
    idUser: 0,
    idClass: 0,
  });

  useEffect(() => {
    setData({
      idUser: infoQualification[0],
      idClass: infoQualification[1],
    });
  }, []);

  return (
    <div>
      <p>TABLA CON TODAS LAS CALIFICACIONES DEL ESTUDIANTE</p>
    </div>
  );
}

export default page;
