import React, { useState } from "react";
import { Button, Flex } from "antd";
import Text from "../../text/Text";
import DeleteModal from "@/components/modal/deleteModal/DeleteModal";
import { DeleteOutlined } from "@ant-design/icons";

function ButtonDelete({ idData, text, render }) {
  const [flag, setFlag] = useState(false);

  const handleChange = () => {
    setFlag(!flag);
  };

  return (
    <Flex wrap="wrap" gap="small">
      <Button type="primary" onClick={handleChange} danger>
        <DeleteOutlined key="ellipsis"></DeleteOutlined>
        {flag && <DeleteModal idData={idData} render={render} />}
      </Button>
    </Flex>
  );
}

export default ButtonDelete;
