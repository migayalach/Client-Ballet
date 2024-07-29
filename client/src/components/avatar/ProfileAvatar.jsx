import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

function ProfileAvatar({ img }) {
  return (
    <Space direction="vertical" size={16}>
      <Avatar src={img} size={150} icon={<UserOutlined />} />
    </Space>
  );
}

export default ProfileAvatar;
