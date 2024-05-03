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
  createUser,
  getByIdUser,
  editUser,
} from "@/redux/actions";
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";

// STYLESHEET'

// JAVASCRIP
import { useAuth } from "@/context/authContext";

dayjs.extend(customParseFormat);

function FormUser({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const { signUp } = useAuth();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectIdUser = useSelector(({ root }) => root?.data);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    idLevel: 0,
    idExtension: 0,
    nameUser: "",
    lastNameUser: "",
    emailUser: "",
    addressUser: "",
    dateBirthUser: "",
    carnetUser: "",
    photoUser: "",
    stateUser: true,
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
      photoUser: URL,
    });
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateBirthUser: dateString,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateUser: boolean,
    });
  };

  const onFinish = async () => {
    if (option === "edit") {
      dispatch(editUser({ ...data, idUser: idData }));
    } else {
      // await handleFirebase(data.emailStaff, data.emailStaff);
      dispatch(createUser(data));
      // await signUp(data.emailUser, data.emailUser);
      setData({
        idLevel: 0,
        idExtension: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        addressUser: "",
        dateBirthUser: "",
        carnetUser: "",
        photoUser: "",
        stateUser: true,
      });
      handleState();
    }
  };

  useEffect(() => {
    dispatch(getExtensionAll());
    dispatch(getLevelAll());
  }, []);

  useEffect(() => {
    idData && dispatch(getByIdUser(idData));
  }, [idData]);

  useEffect(() => {
    if (option === "edit" && selectIdUser) {
      setData({
        idLevel: selectIdUser.idLevel,
        idExtension: selectIdUser.idExtension,
        nameUser: selectIdUser.nameUser,
        lastNameUser: selectIdUser.lastNameUser,
        emailUser: selectIdUser.emailUser,
        addressUser: selectIdUser.addressUser,
        dateBirthUser: selectIdUser?.dateBirthUser.substring(0, 10),
        carnetUser: selectIdUser.carnetUser,
        stateUser: selectIdUser.stateUser,
      });
    }
  }, [option, selectIdUser]);

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
            name="nameUser"
            placeholder="Alverto Reinaldo"
            data={data.nameUser}
          />
        </Form.Item>

        <Form.Item label="Apellidos">
          <InputComponent
            onChange={handleChange}
            name="lastNameUser"
            placeholder="Del Rio"
            data={data.lastNameUser}
          />
        </Form.Item>

        <Form.Item label="Email">
          <InputComponent
            onChange={handleChange}
            name="emailUser"
            placeholder="albert@gmail.com"
            data={data.emailUser}
          />
        </Form.Item>

        <Form.Item label="Carnet">
          <InputComponent
            onChange={handleChange}
            name="carnetUser"
            placeholder="8569134"
            data={data.carnetUser}
          />
        </Form.Item>

        <Form.Item label="Extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
            value={option === "edit" ? selectIdUser?.department : ""}
          />
        </Form.Item>

        <Form.Item label="Nivel">
          <SelectComponet
            list={selectLevel}
            handleChange={handleChange}
            flag="Level"
            value={option === "edit" ? selectIdUser?.nameLevel : ""}
          />
        </Form.Item>

        <Form.Item label="Fecha de nacimiento">
          <DateComponent
            onChange={onChangeDate}
            date={option === "edit" ? data?.dateBirthUser : ""}
          />
        </Form.Item>

        <Form.Item label="Dirección">
          <AreaText
            name="addressUser"
            placeholder="Calle siempre viva N°666"
            onChange={handleChange}
            value={data.addressUser}
          />
        </Form.Item>

        {option === "edit" && (
          <Form.Item label="Estado" valuePropName="checked">
            <State stateHours={data.stateUser} handleChange={onChangeState} />
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

export default FormUser;
