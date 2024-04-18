// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState, useEffect } from "react";

// LIBRARY
import customParseFormat from "dayjs/plugin/customParseFormat";
import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Switch, Upload } from "antd";
import dayjs from "dayjs";

//REDUX
import {
  getExtensionAll,
  getLevelAll,
  createStaff,
  createHours,
} from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PhotoLoading from "@/components/photoLoading/PhotoLoading";

// STYLESHEET'

// JAVASCRIP
const { TextArea } = Input;
const normFile = (event) => {
  if (Array.isArray(event)) {
    return event;
  }
  return event?.fileList;
};

dayjs.extend(customParseFormat);

function FormComponet({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectIdStaff = useSelector(({ root }) => root?.data);

  const [data, setData] = useState({
    idLevel: 0,
    idExtension: 0,
    nameStaff: "",
    lastNameStaff: "",
    emailStaff: "",
    addressStaff: "",
    dateBirthStaff: "",
    carnetStaff: "",
    photoStaff: "",
    stateStaff: true,
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
  };

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

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateBirthStaff: dateString,
    });
  };

  const onFinish = () => {
    dispatch(createStaff(data));
  };

  useEffect(() => {
    dispatch(getExtensionAll());
    dispatch(getLevelAll());
  }, []);

  useEffect(() => {
    if (option === "edit" && selectIdStaff) {
      setData({
        idLevel: selectIdStaff.idLevel,
        idExtension: selectIdStaff.idExtension,
        nameStaff: selectIdStaff.nameStaff,
        lastNameStaff: selectIdStaff.lastNameStaff,
        emailStaff: selectIdStaff.emailStaff,
        addressStaff: selectIdStaff.addressStaff,
        // dateBirthStaff: dayjs(selectIdStaff.dateBirthStaff).format(
        //   "YYYY-MM-DD"
        // ),
        dateBirthStaff: selectIdStaff.dateBirthStaff,
        carnetStaff: selectIdStaff.carnetStaff,
        stateStaff: selectIdStaff.stateStaff,
      });
    }
  }, [selectIdStaff, option]);

  console.log(data);

  return (
    <>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Nombres">
          <Input
            onChange={handleChange}
            name="nameStaff"
            placeholder="Alverto Reinaldo"
            value={data.nameStaff}
          />
        </Form.Item>

        <Form.Item label="Apellidos">
          <Input
            onChange={handleChange}
            name="lastNameStaff"
            placeholder="Del Rio"
            value={data.lastNameStaff}
          />
        </Form.Item>

        <Form.Item label="Email">
          <Input
            onChange={handleChange}
            name="emailStaff"
            placeholder="albert@gmail.com"
            value={data.emailStaff}
          />
        </Form.Item>

        <Form.Item label="Carnet">
          <Input
            onChange={handleChange}
            name="carnetStaff"
            placeholder="8569134"
            value={data.carnetStaff}
          />
        </Form.Item>

        <Form.Item label="Extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
          />
        </Form.Item>

        <Form.Item label="Nivel">
          <SelectComponet
            list={selectLevel}
            handleChange={handleChange}
            flag="Level"
          />
        </Form.Item>

        <Form.Item label="Fecha de nacimiento">
          <DatePicker
            placeholder={"2019-09-03"}
            name="dateBirthStaff"
            onChange={onChangeDate}
            // value={(data.dateBirthStaff)}
            // defaultValue={(data.dateBirthStaff)}
          />
          
        </Form.Item>

        <Form.Item label="Dirección">
          <TextArea
            rows={4}
            onChange={handleChange}
            name="addressStaff"
            placeholder="Calle Siempre Viva N°666"
            value={data.addressStaff}
          />
        </Form.Item>

        {option === "edit" && (
          <Form.Item label="Estado" valuePropName="checked">
            <Switch />
          </Form.Item>
        )}

        <Form.Item
          label="Foto"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
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
        </Form.Item>

        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
    </>
  );
}

export default FormComponet;
