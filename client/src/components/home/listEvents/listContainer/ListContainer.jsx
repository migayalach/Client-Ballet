import React from "react";
import "./list-container.css";
import CardFlex from "@/components/cardFlex/CardFlex";
import NoResults from "@/components/pageResult/NoResults";

const gridStyle = {
  width: "15%",
  textAlign: "center",
};

const gridStyleContent = {
  width: "70%",
  textAlign: "left",
};

function ListContainer({ list, access }) {
  if (!list?.length)
    return <NoResults message="Aún no hay eventos programados!" />;
  return <CardFlex list={list} access={access} />;
}

export default ListContainer;
