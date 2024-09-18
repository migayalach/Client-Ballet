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
import { Button, Form, Input } from "antd";
import dayjs from "dayjs";

//REDUX
import { createUser, editUser, getExtensionAll } from "@/redux/actions";
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";

// STYLESHEET'
import "./form-user.css";

// JAVASCRIP
import ProfileAvatar from "@/components/avatar/ProfileAvatar";

dayjs.extend(customParseFormat);

function FormUser({ dataUser, option, handleState }) {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectAccess = useSelector(({ root }) => root?.access?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);
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
      dispatch(
        editUser({
          ...data,
          idUser: dataUser.idUser,
          edit: "edit",
        })
      );
    } else if (option === "editProfile") {
      dispatch(
        editUser({
          ...data,
          idUser: dataUser.idUser,
          edit: "profile",
        })
      );
    } else {
      dispatch(createUser(data));
      setData({
        idLevel: 0,
        idExtension: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        passwordUser: "",
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
    if (option === "edit") {
      setData({
        idLevel: dataUser.idLevel,
        idExtension: dataUser.idExtension,
        nameUser: dataUser.nameUser,
        lastNameUser: dataUser.lastNameUser,
        emailUser: dataUser.emailUser,
        addressUser: dataUser.addressUser,
        dateBirthUser: dataUser?.dateBirthUser.substring(0, 10),
        carnetUser: dataUser.carnetUser,
        stateUser: dataUser.stateUser,
      });
    } else if (option === "editProfile") {
      setData({
        idLevel: dataUser.idLevel,
        idExtension: dataUser.idExtension,
        nameUser: dataUser.nameUser,
        lastNameUser: dataUser.lastNameUser,
        emailUser: dataUser.emailUser,
        addressUser: dataUser.addressUser,
        dateBirthUser: dataUser?.dateBirthUser.substring(0, 10),
        carnetUser: dataUser.carnetUser,
        stateUser: dataUser.stateUser,
        photoUser: dataUser.photoUser,
      });
      dispatch(getExtensionAll());
    }
  }, [option]);

  return (
    <div className="form-user">
      <div className="photo-user">
        {option === "editProfile" && <ProfileAvatar img={data.photoUser} />}
      </div>

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

        {/* TODO RELLENAR CAMPOS CON EL LOCALSTORAGE */}
        {option === "editProfile" && (
          <Form.Item label="Password">
            <Input.Password
              onChange={handleChange}
              name="passwordUser"
              placeholder="hola-123"
            />
          </Form.Item>
        )}

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
            name="extension"
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
            value={
              option === "edit" || option === "editProfile"
                ? dataUser?.idExtension
                : ""
            }
          />
        </Form.Item>

        {(selectAccess === "Director" || selectAccess === "Secretaria") && (
          <Form.Item label="Nivel">
            <SelectComponet
              name="level"
              list={selectLevel}
              handleChange={handleChange}
              flag="Level"
              value={option === "edit" ? dataUser?.idLevel : ""}
            />
          </Form.Item>
        )}

        <Form.Item label="Fecha de nacimiento" name="birthdate">
          <DateComponent
            onChange={onChangeDate}
            date={
              option === "edit" || option === "editProfile"
                ? data?.dateBirthUser
                : ""
            }
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
    </div>
  );
}

export default FormUser;
