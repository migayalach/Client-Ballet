import React from "react";
import { Card } from "antd";
import "./list-container.css";
import ButtonMoreInfo from "@/components/button/buttonMoreInfo/ButtonMoreInfo";
import CardFlex from "@/components/cardFlex/CardFlex";

const info = [
  {
    date: "20",
    month: "de Mayo",
    description:
      "Ya que el texto en negrita puede ayudarnos a poner énfasis en cierta información, es esencial seguir las mejores prácticas para asegurarnos que el texto se mantiene legible y accesible.",
    picture:
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1723419831/Ballet/HOME/five.jpg",
  },
  {
    date: "19",
    month: "de Mayo",
    description:
      "Mientras que una fuente con más grosor puede ser propicia para encabezados, una fuente más ligera sería apropiada para cuerpos de texto grandes. Es importante asegurarnos que el texto en negrita no se repita constantemente ya que puede ser abrumador y restar valor a otros elementos de la página.",
    picture:
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1723419831/Ballet/HOME/four.jpg",
  },
  {
    date: "18",
    month: "de Mayo",
    description:
      "Es importante usar el texto en negrita en proporciones escasas, sólo cuando este es realmente necesario y para enfatizar información importante. Evita usar el texto en negrita para párrafos enteros o bloques de texto, ya que esto puede dificultar la lectura a los usuarios y hace indistinguible la información importante del contenido regular.",
    picture:
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/zudp6q2v6oag118b5tca.jpg",
  },
  {
    date: "17",
    month: "de Mayo",
    description:
      "Escoger el grosor correcto para tu contenido y saber balancear con otros estilos de formato, evitar el sobre uso y hacer pruebas de accesibilidad son los pasos necesarios para asegurarnos que nuestro contenido a la hora de usar texto en negrita se mantenga legible y accesible para todo los usuarios. Gracias por leer, diviértete en tu proyecto!",
    picture:
      // "https://res.cloudinary.com/dqgcyonb9/image/upload/v1702008567/57_nqynes.gif",
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/wnzqlwqo3daefqtk3dao.jpg",
  },
  {
    date: "16",
    month: "de Mayo",
    description:
      "Escoger el grosor correcto para tu contenido y saber balancear con otros estilos de formato, evitar el sobre uso y hacer pruebas de accesibilidad son los pasos necesarios para asegurarnos que nuestro contenido a la hora de usar texto en negrita se mantenga legible y accesible para todo los usuarios. Gracias por leer, diviértete en tu proyecto!",
    picture:
      "https://res.cloudinary.com/dqgcyonb9/image/upload/v1723418530/Ballet/HOME/nuhn5rcdjsbk0soefc0g.jpg",
  },
];

const gridStyle = {
  width: "15%",
  textAlign: "center",
};

const gridStyleContent = {
  width: "70%",
  textAlign: "left",
};

function ListContainer({ list, access }) {
  return <CardFlex list={list} access={access} />;
}

export default ListContainer;
