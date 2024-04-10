import React, { useState } from "react";
import { Button, Flex } from "antd";
import Text from "../../text/Text";
import EditModal from "@/components/modal/editModal/EditModal";

function ButtonEdit({ idData, text }) {
  const [flag, setFlag] = useState(false);

  const handleChange = () => {
    setFlag(!flag);
  };

  return (
    <Flex wrap="wrap" gap="small">
      <Button type="primary" onClick={handleChange}>
        <Text text={text} />
        {flag && <EditModal idData={idData} />}
      </Button>
    </Flex>
  );
}

export default ButtonEdit;
