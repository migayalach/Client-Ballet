import React from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Result } from "antd";

function NoResults({ message }) {
  return <Result icon={<SmileOutlined />} title={`${message}!`} />;
}

export default NoResults;
