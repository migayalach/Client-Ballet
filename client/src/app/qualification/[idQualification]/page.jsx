"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function page({ params }) {
  return (
    <div>
      <h1>HOLIS</h1>
      <p>{params.idQualification}</p>
      <h3>TABLA CON TODOS LOS ALUMNOS</h3>
    </div>
  );
}

export default page;
