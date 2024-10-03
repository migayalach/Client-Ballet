import React, { useState } from "react";
import { Button, Flex } from "antd";
import { ContactsOutlined } from "@ant-design/icons";

function ButtonRenderId() {
  return (
    <Flex wrap="wrap" gap="small">
      <Button
        style={{
          backgroundColor: "#02c39a",
          borderColor: "#02c39a",
          color: "white",
          transition: "opacity 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <ContactsOutlined style={{ color: "white" }} key="setting" />
      </Button>
    </Flex>
  );
}

export default ButtonRenderId;
