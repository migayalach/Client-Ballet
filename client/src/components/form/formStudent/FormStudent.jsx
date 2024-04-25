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
  createStudent,
  editStudent,
  getByIdStudent,
} from "@/redux/actions";
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";

// STYLESHEET'

// JAVASCRIP
dayjs.extend(customParseFormat);

function FormStudent({ idData, option, handleState }) {
  const dispatch = useDispatch();
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectIdStudent = useSelector(({ root }) => root?.data);

  const [data, setData] = useState({
    idExtension: 0,
    nameStudent: "",
    lastNameStudent: "",
    emailStudent: "",
    carnetStudent: "",
    addressStudent: "",
    dateBirthStudent: "",
    photoStudent: "",
    stateStudent: true,
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateBirthStudent: dateString,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateStudent: boolean,
    });
  };

  const handleURLChange = (URL) => {
    setData({
      ...data,
      photoStudent: URL,
    });
  };

  const onFinish = () => {
    if (option === "edit") {
      dispatch(editStudent({ ...data, idStudent: idData }));
    } else {
      dispatch(createStudent(data));
      setData({
        idExtension: 0,
        nameStudent: "",
        lastNameStudent: "",
        emailStudent: "",
        carnetStudent: "",
        addressStudent: "",
        dateBirthStudent: "",
        photoStudent: "",
        stateStudent: true,
      });
      handleState();
    }
  };

  useEffect(() => {
    dispatch(getExtensionAll());
  }, []);

  useEffect(() => {
    idData && dispatch(getByIdStudent(idData));
  }, [idData]);

  useEffect(() => {
    if (option === "edit" && selectIdStudent) {
      setData({
        idExtension: selectIdStudent.idExtension,
        nameStudent: selectIdStudent.nameStudent,
        lastNameStudent: selectIdStudent.lastNameStudent,
        emailStudent: selectIdStudent.emailStudent,
        addressStudent: selectIdStudent.addressStudent,
        dateBirthStudent: selectIdStudent?.dateBirthStudent.substring(0, 10),
        carnetStudent: selectIdStudent.carnetStudent,
        stateStudent: selectIdStudent.stateStudent,
      });
    }
  }, [option, selectIdStudent]);

  return (
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
          name="nameStudent"
          placeholder="Alverto Reinaldo"
          data={data.nameStudent}
        />
      </Form.Item>

      <Form.Item label="Apellidos">
        <InputComponent
          onChange={handleChange}
          name="lastNameStudent"
          placeholder="Del Rio"
          data={data.lastNameStudent}
        />
      </Form.Item>

      <Form.Item label="Email">
        <InputComponent
          onChange={handleChange}
          name="emailStudent"
          placeholder="albert@gmail.com"
          data={data.emailStudent}
        />
      </Form.Item>

      <Form.Item label="Carnet">
        <InputComponent
          onChange={handleChange}
          name="carnetStudent"
          placeholder="8569134"
          data={data.carnetStudent}
        />
      </Form.Item>

      <Form.Item label="Extension">
        <SelectComponet
          list={selectExtension}
          handleChange={handleChange}
          flag="Extension"
          value={option === "edit" ? selectIdStudent?.department : ""}
        />
      </Form.Item>

      <Form.Item label="Dirección">
        <AreaText
          name="addressStudent"
          placeholder="Calle siempre viva N°666"
          onChange={handleChange}
          value={data.addressStudent}
        />
      </Form.Item>

      <Form.Item label="Fecha de nacimiento">
        <DateComponent
          onChange={onChangeDate}
          date={option === "edit" ? data?.dateBirthStudent : ""}
        />
      </Form.Item>

      {option === "edit" && (
        <Form.Item label="Estado">
          <State stateHours={data.stateStudent} handleChange={onChangeState} />
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
  );
}

export default FormStudent;
