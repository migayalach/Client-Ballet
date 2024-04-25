import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";

function ImageCloudinary({ onChange }) {
  const [fileList, setFileList] = useState([]);

  const onChangeState = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src && file.originFileObj) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(
      `<img src="${src}" alt="Preview" style="max-width: 100%; max-height: 100%;" />`
    );
  };

  const beforeUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "photos");
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dqgcyonb9/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const { secure_url } = await response.json();
        const newFileList = [...fileList, { ...file, url: secure_url }];
        setFileList(newFileList);
        return onChange(secure_url);
      } else {
        console.error("Error al subir la imagen a Cloudinary");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    return false;
  };

  return (
    <div>
      <ImgCrop>
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onChange={onChangeState}
          onPreview={onPreview}
          beforeUpload={beforeUpload}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
}

export default ImageCloudinary;
