import React from "react";
import ListContainer from "./listContainer/ListContainer";
import "./list-events.css";

function ListEvents({ list }) {
  
  return (
    <div className="list-container">
      <ListContainer list={list} />
    </div>
  );
}

export default ListEvents;
