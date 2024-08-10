// HOOK'S
import React from "react";

// LIBRARY
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

// JAVASCRIP

// STYLESHEET'

function ProfileAvatar({ img }) {
  return (
    <Space direction="vertical" size={16}>
      <Avatar src={img} size={150} icon={<UserOutlined />} />
    </Space>
  );
}

export default ProfileAvatar;
