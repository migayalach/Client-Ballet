// COMPONET'S
import ModalComponent from "../modal/ModalComponent";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import State from "../state/State";
import PaginationComponet from "@/components/pagination/PaginationComponet";

// HOOK'S
import React, { useEffect, useState } from "react";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY

//REDUX
import { deleteIdHours } from "@/redux/actions";
import ButtonDelete from "../button/buttonDelete/ButtonDelete";
import ButtonEdit from "../button/buttonEdit/ButtonEdit";

// JAVASCRIP

// STYLESHEET'

function List({ data }) {
  const selectInfo = useSelector((state) => state.root.info);
  if (!selectInfo) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <table style={{ borderCollapse: "collapse", border: "1px solid white" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid white", padding: "8px" }}>N°</th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Inicio
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>Final</th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Duracion
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Estado
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Editar
            </th>
            <th style={{ border: "1px solid white", padding: "8px" }}>
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({ idHours, startTime, endTime, totalTime, stateHours }, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {index + 1}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {startTime}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {endTime}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  {totalTime}
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  <State stateHours={stateHours} />
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  <ButtonEdit idData={idHours} text="Editar" />
                </td>
                <td style={{ border: "1px solid white", padding: "8px" }}>
                  <ButtonDelete idData={idHours} text="Eliminar" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {selectInfo.pages && (
        <PaginationComponet
          pages={selectInfo.pages}
          next={selectInfo.next}
          prev={selectInfo.prev}
        />
      )}
    </div>
  );
}

export default List;
