import React from "react";
import "./video.css";

function Video() {
  return (
    <div className="container-video">
      <p className="title-video">Video institucional</p>
      <div className="video-container-rep">
        <iframe
          className="iFrame-video"
          src="https://www.youtube.com/embed/1ooy2CyFLH4"
          title="Video institucional"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <img
        className="image-video-fount"
        src="https://res.cloudinary.com/dqgcyonb9/image/upload/v1723419831/Ballet/HOME/two.jpg"
        alt="Fondo de seccion"
      />
    </div>
  );
}

export default Video;
