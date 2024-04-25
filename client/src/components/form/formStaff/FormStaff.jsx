// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import InputComponent from "@/components/inputComponent/InputComponent";
import DateComponent from "@/components/date/DateComponent";
import AreaText from "@/components/areaText/AreaText";
import State from "@/components/state/State";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Button, Form } from "antd";
import dayjs from "dayjs";

//REDUX
import {
  getExtensionAll,
  getLevelAll,
  createStaff,
  getByIdStaff,
  editStaff,
} from "@/redux/actions";


// STYLESHEET'

// JAVASCRIP

const normFile = (event) => {
  if (Array.isArray(event)) {
    return event;
  }
  return event?.fileList;
};

dayjs.extend(customParseFormat);

function FormStaff({ idData, option, handleState }) {
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

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateStaff: boolean,
    });
  };

  const onFinish = () => {
    if (option === "edit") {
      dispatch(editStaff({ ...data, idStaff: idData }));
    } else {
      dispatch(createStaff(data));
      setData({
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
      handleState();
    }
  };

  useEffect(() => {
    dispatch(getExtensionAll());
    dispatch(getLevelAll());
  }, []);

  useEffect(() => {
    idData && dispatch(getByIdStaff(idData));
  }, [idData]);

  useEffect(() => {
    if (option === "edit" && selectIdStaff) {
      setData({
        idLevel: selectIdStaff.idLevel,
        idExtension: selectIdStaff.idExtension,
        nameStaff: selectIdStaff.nameStaff,
        lastNameStaff: selectIdStaff.lastNameStaff,
        emailStaff: selectIdStaff.emailStaff,
        addressStaff: selectIdStaff.addressStaff,
        dateBirthStaff: selectIdStaff?.dateBirthStaff.substring(0, 10),
        carnetStaff: selectIdStaff.carnetStaff,
        stateStaff: selectIdStaff.stateStaff,
      });
    }
  }, [option, selectIdStaff]);

  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        style={{
          maxWidth: 500,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Nombres">
          <InputComponent
            onChange={handleChange}
            name="nameStaff"
            placeholder="Alverto Reinaldo"
            data={data.nameStaff}
          />
        </Form.Item>

        <Form.Item label="Apellidos">
          <InputComponent
            onChange={handleChange}
            name="lastNameStaff"
            placeholder="Del Rio"
            data={data.lastNameStaff}
          />
        </Form.Item>

        <Form.Item label="Email">
          <InputComponent
            onChange={handleChange}
            name="emailStaff"
            placeholder="albert@gmail.com"
            data={data.emailStaff}
          />
        </Form.Item>

        <Form.Item label="Carnet">
          <InputComponent
            onChange={handleChange}
            name="carnetStaff"
            placeholder="8569134"
            data={data.carnetStaff}
          />
        </Form.Item>

        <Form.Item label="Extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
            value={option === "edit" ? selectIdStaff?.department : ""}
          />
        </Form.Item>

        <Form.Item label="Nivel">
          <SelectComponet
            list={selectLevel}
            handleChange={handleChange}
            flag="Level"
            value={option === "edit" ? selectIdStaff?.nameLevel : ""}
          />
        </Form.Item>

        <Form.Item label="Fecha de nacimiento">
          <DateComponent
            onChange={onChangeDate}
            date={option === "edit" ? data?.dateBirthStaff : ""}
          />
        </Form.Item>

        <Form.Item label="Dirección">
          <AreaText
            name="addressStaff"
            placeholder="Calle siempre viva N°666"
            onChange={handleChange}
            value={data.addressStaff}
          />
        </Form.Item>

        {option === "edit" && (
          <Form.Item label="Estado" valuePropName="checked">
            <State stateHours={data.stateStaff} handleChange={onChangeState} />
          </Form.Item>
        )}

        {option === "create" && (
          <Form.Item
            label="Foto"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <input type="file" onChange={handlePhoto} />
          </Form.Item>
        )}

        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
    </>
  );
}

export default FormStaff;
