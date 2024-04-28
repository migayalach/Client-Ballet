import React from "react";
import { Collapse, Divider } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
import ListData from "../listData/ListData";

function CollapseData({ render }) {
  return (
    <>
      <Divider orientation="left">Clases</Divider>
      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: "Lista de clases dictadas",
            children: <ListData />,
          },
        ]}
      />
      <Divider orientation="left">Horarios</Divider>
      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: "Horarios de clases dictadas",
            children: <p>{text}</p>,
          },
        ]}
      />
      <Divider orientation="left">Estudiantes</Divider>
      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: "Lista de alumnos",
            children: <p>{text}</p>,
          },
        ]}
      />
    </>
  );
}

export default CollapseData;
