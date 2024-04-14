// COMPONET'S
import NavBar from "@/components/navBar/NavBar";

// HOOK'S
import React from "react";
import { Rate } from 'antd';

// LIBRARY

//REDUX

// JAVASCRIP

// STYLESHEET'

function Staff() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
      <Rate allowHalf defaultValue={2.5} />
      </div>
    </div>
  );
}

export default Staff;
