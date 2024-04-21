import React, { useEffect, useState } from "react";
import { Button, Flex } from "antd";
import Text from "../../text/Text";
import EditModal from "@/components/modal/editModal/EditModal";

function ButtonEdit({ idData, text }) {
  return (
    <Flex wrap="wrap" gap="small">
      <EditModal idData={idData} text={text} />
    </Flex>
  );
}

export default ButtonEdit;
