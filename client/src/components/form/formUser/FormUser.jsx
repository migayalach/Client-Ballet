// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import InputComponent from "@/components/inputComponent/InputComponent";
import DateComponent from "@/components/date/DateComponent";
import AreaText from "@/components/areaText/AreaText";
import State from "@/components/state/State";
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";
import ProfileAvatar from "@/components/avatar/ProfileAvatar";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Button, Form, Input } from "antd";
import dayjs from "dayjs";

//REDUX
import { createUser, editUser, getByIdUser } from "@/redux/actions";

// STYLESHEET'
import "./form-user.css";

// JAVASCRIP
import formValidationUser from "./formValidationUser";
dayjs.extend(customParseFormat);

function FormUser({ idUser, option, handleState }) {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectAccess = useSelector(({ root }) => root?.access?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectState = useSelector(({ root }) => root?.state);
  const selectUser = useSelector(({ root }) => root?.data);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    idLevel: 0,
    idExtension: 0,
    nameUser: "",
    lastNameUser: "",
    emailUser: "",
    addressUser: "",
    dateBirthUser: "",
    carnetUser: "",
    numberPhone: "",
    photoUser: "",
    stateUser: true,
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
    setErrors(
      formValidationUser({
        ...data,
        [key]: !event.key ? event.target.value : event.key,
      })
    );
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
    setErrors(
      formValidationUser({
        ...data,
        dateBirthUser: dateString,
      })
    );
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateUser: boolean,
    });
  };

  const onFinish = async () => {    
    if (option === "edit" || option === "editProfile") {
      dispatch(
        editUser({
          ...data,
          idUser: selectUser?.idUser,
          edit: "edit",
        })
      );
    } else if (selectState === "create") {
      dispatch(createUser(data));
      setData({
        idLevel: 0,
        idExtension: 0,
        nameUser: "",
        lastNameUser: "",
        emailUser: "",
        addressUser: "",
        dateBirthUser: "",
        carnetUser: "",
        numberPhone: "",
        photoUser: "",
        stateUser: true,
      });
      handleState();
    }
  };

  useEffect(() => {
    if (option === "edit" && idUser > 0) {
      dispatch(getByIdUser(idUser));
    }
  }, [option, idUser]);

  useEffect(() => {
    if (option === "edit" || option === "editProfile") {
      setData({
        idLevel: selectUser?.idLevel,
        idExtension: selectUser?.idExtension,
        nameUser: selectUser?.nameUser,
        lastNameUser: selectUser?.lastNameUser,
        emailUser: selectUser?.emailUser,
        addressUser: selectUser?.addressUser,
        dateBirthUser: selectUser?.dateBirthUser.substring(0, 10),
        carnetUser: selectUser?.carnetUser,
        numberPhone: selectUser?.numberPhone,
        stateUser: selectUser?.stateUser,
        photoUser: selectUser?.photoUser,
      });
    }
  }, [selectUser, option]);

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
          {errors.nameUser && <p className="messageError">{errors.nameUser}</p>}
        </Form.Item>

        <Form.Item label="Apellidos">
          <InputComponent
            onChange={handleChange}
            name="lastNameUser"
            placeholder="Del Rio"
            data={data.lastNameUser}
          />
          {errors.lastNameUser && (
            <p className="messageError">{errors.lastNameUser}</p>
          )}
        </Form.Item>

        <Form.Item label="Email">
          <InputComponent
            onChange={handleChange}
            name="emailUser"
            placeholder="albert@gmail.com"
            data={data.emailUser}
          />
          {errors.emailUser && (
            <p className="messageError">{errors.emailUser}</p>
          )}
        </Form.Item>

        <Form.Item label="Carnet">
          <InputComponent
            onChange={handleChange}
            name="carnetUser"
            placeholder="8569134"
            data={data.carnetUser}
          />
          {errors.carnetUser && (
            <p className="messageError">{errors.carnetUser}</p>
          )}
        </Form.Item>

        <Form.Item label="Numero de contacto">
          <InputComponent
            onChange={handleChange}
            name="numberPhone"
            placeholder="75710692"
            data={data.numberPhone}
          />
          {errors.numberPhone && (
            <p className="messageError">{errors.numberPhone}</p>
          )}
        </Form.Item>

        <Form.Item label="Extension">
          <SelectComponet
            name="extension"
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
            value={
              option === "edit" || option === "editProfile"
                ? data?.idExtension
                : ""
            }
          />
          {errors.extension && (
            <p className="messageError">{errors.extension}</p>
          )}
        </Form.Item>

        {(selectAccess === "Director" || selectAccess === "Secretaria") && (
          <Form.Item label="Nivel">
            <SelectComponet
              name="level"
              list={selectLevel}
              handleChange={handleChange}
              flag="Level"
              value={
                option === "edit" || option === "editProfile"
                  ? data?.idLevel
                  : ""
              }
            />
            {errors.level && <p className="messageError">{errors.level}</p>}
          </Form.Item>
        )}

        <Form.Item label="Fecha de nacimiento">
          <DateComponent
            name="birthdate"
            onChange={onChangeDate}
            date={
              option === "edit" || option === "editProfile"
                ? data?.dateBirthUser
                : ""
            }
          />
          {errors.birthdate && (
            <p className="messageError">{errors.birthdate}</p>
          )}
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

        <Form.Item label="Foto de perfil">
          <ImageCloudinary onChange={handleURLChange} />
        </Form.Item>

        <div>
          {!Object.keys(errors).length && data.nameUser?.length ? (
            <Button type="primary" htmlType="submit">
              <Text text="Crear" />
            </Button>
          ) : (
            ""
          )}
        </div>
      </Form>
    </div>
  );
}

export default FormUser;
