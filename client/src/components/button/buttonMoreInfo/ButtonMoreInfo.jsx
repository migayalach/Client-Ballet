"use client";
import React from "react";
import { Button, Dropdown, Flex } from "antd";
import Link from "next/link";
import "./button-more-info.css"

function ButtonMoreInfo() {
  
  return (
    <div>
      <Link href={`/events`}>
        <Button className="button-more">VER MAS</Button>
      </Link>
    </div>
  );
}
export default ButtonMoreInfo;
