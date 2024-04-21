import React from "react";

function Photography() {
  const handlePhoto = async (event) => {
    const file = event.target.files[0];
    // const file = event.originFileObj
    // const file = event;
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
        const { url } = await response.json();
        setData({
          ...data,
          photoStaff: url,
        });
      } else {
        console.error("Error al subir la imagen a Cloudinary");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div>
      {/* <Upload action="/upload.do" listType="picture-card">
        <button
          style={{
            border: 0,
            background: "none",
          }}
          type="button"
        >
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          />
        </button>
      </Upload> */}
      <input type="file" onChange={handlePhoto} />

      {/* <PhotoLoading handle={handlePhoto} /> */}
    </div>
  );
}

export default Photography;
