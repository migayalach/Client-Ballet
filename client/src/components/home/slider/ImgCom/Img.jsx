import React from "react";
import { Image } from "antd";
import "./img-style.css"

function Img({ url, description }) {
  return (
    <Image className="carousel-image" width={900} src={url} alt={description} />
  );
}

export default Img;
