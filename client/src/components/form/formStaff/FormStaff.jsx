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
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";

// STYLESHEET'

// JAVASCRIP
import { useAuth } from "@/context/authContext";

dayjs.extend(customParseFormat);

function FormStaff({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const { signUp } = useAuth();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectIdStaff = useSelector(({ root }) => root?.data);
  const [error, setError] = useState("");
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

  const handleURLChange = (URL) => {
    setData({
      ...data,
      photoStaff: URL,
    });
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

  // //TODO FALTA ASYNC AWAIT MAS MANEJADOR DE ERRORES Y event.preventDefault()
  // const handleFirebase = async (email, email) => {
  //   try {
  //     await signUp(email, email);
  //     setError("");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  const onFinish = async () => {
    if (option === "edit") {
      dispatch(editStaff({ ...data, idStaff: idData }));
    } else {
      // await handleFirebase(data.emailStaff, data.emailStaff);
      await signUp(data.emailStaff, data.emailStaff);
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
          <Form.Item label="Foto de perfil">
            <ImageCloudinary onChange={handleURLChange} />
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
