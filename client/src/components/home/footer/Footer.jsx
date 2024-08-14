import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">DONDE ESTAMOS</p>
      <div className="footer-info">
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7710049267243!2d-122.08424968469276!3d37.42206577982564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b4ad7ad703%3A0x83e5c3d4eaa2a3d1!2sGoogleplex!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
            width="200%"
            height="120%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          ></iframe>{" "}
        </div>
        <div className="text-info-data">
          <p className="text-footer">
            DIRECCION:
            <br />
            Calle siempre viva Avenida
            <br />
            Los Amorosos N° 1230
          </p>
          <p className="text-footer">Sobre Nosotros</p>
          <p className="text-footer">¿Quieres saber mas?</p>
          <div className="container-icons">
            <FacebookOutlined />
            <InstagramOutlined />
            <TikTokOutlined />
          </div>
        </div>
      </div>
      <div className="container-author">
        <footer className="text-footer-create">
          Creado por <span>JMC</span> © Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}

export default Footer;
