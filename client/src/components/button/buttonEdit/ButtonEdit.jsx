import React, { useState } from "react";
import { Button, Flex } from "antd";
import EditModal from "@/components/modal/editModal/EditModal";
import { EditOutlined } from "@ant-design/icons";

function ButtonEdit({ idData, text, render }) {
  const [flag, setFlag] = useState(false);

  const handleChange = () => {
    setFlag(!flag);
  };

  return (
    <Flex wrap="wrap" gap="small">
      <Button type="primary" onClick={handleChange}>
        <EditOutlined key="ellipsis" />
      </Button>
      {flag && <EditModal idData={idData} text={text} render={render} />}
    </Flex>
  );
}

export default ButtonEdit;
