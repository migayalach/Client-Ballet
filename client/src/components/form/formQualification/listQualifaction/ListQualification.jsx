import React, { useState } from "react";

function ListQualification({ item }) {
  const [list, setList] = useState([]);

  return (
    <div>
      {list.map(({ uuid, item }) => (
        <div key={uuid} style={{ border: "2px solid black", padding: "3px" }}>
          <span>{uuid}</span> - <span>{item}</span>
          <EditOutlined onClick={() => handleUpdate(uuid)} />
          <DeleteOutlined onClick={() => handleDelete(uuid)} />
        </div>
      ))}
    </div>
  );
}

export default ListQualification;
