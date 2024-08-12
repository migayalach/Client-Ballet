import React from "react";
import { Carousel } from "antd";
import Img from "./ImgCom/Img";
import "./slider.css";

function Slider() {
  return (
    <Carousel autoplay dotPosition="top" className="carousel-container">
      <div>
        <Img
          url="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/wnzqlwqo3daefqtk3dao.jpg"
          description="Girl dancing"
        />
      </div>
      <div>
        <Img
          url="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/zudp6q2v6oag118b5tca.jpg"
          description="Couple dancing"
        />
      </div>
      <div>
        <Img
          url="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/k6jprhqk9mfp4955yuxc.jpg"
          description="Arm movement"
        />
      </div>
      <div>
        <Img
          url="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/nuhn5rcdjsbk0soefc0g.jpg"
          description="People"
        />
      </div>
    </Carousel>
  );
}

export default Slider;
