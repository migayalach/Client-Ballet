import React, { useState } from "react";
import { Button, Flex } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

function ButtonRenderId() {
  return (
    <Flex wrap="wrap" gap="small">
      <Button
        type="link"
        style={{ backgroundColor: "#02c39a", borderColor: "#02c39a" }}
      >
        <ContactsOutlined key="setting" />
      </Button>
    </Flex>
  );
}

export default ButtonRenderId;
