// COMPONET'S
import Text from "@/components/text/Text";
import AreaText from "@/components/areaText/AreaText";
import DateComponent from "@/components/date/DateComponent";
import InputComponent from "@/components/inputComponent/InputComponent";
import ImageCloudinary from "@/components/imageCloudinary/ImageCloudinary";
import TotalHours from "@/components/totalHours/TotalHours";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import { addListEvent } from "@/redux/actions";

// STYLESHEET'

// JAVASCRIP

function FormEvents({ option, handleState }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    hour: "00:00:00",
    dateNews: "",
    title: "",
    body: "",
    urlPicture: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeHour = (name, time, timeString, value) => {
    setData({
      ...data,
      hour: timeString,
    });
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateNews: dateString,
    });
  };

  const handleURLChange = (URL) => {
    setData({
      ...data,
      urlPicture: URL,
    });
  };

  const onFinish = () => {
    if (option === "edit") {
      // dispatch(editTypeHour({ ...data, idTypeClass: idData }));
    } else {
      dispatch(addListEvent(data));
      setData({
        hour: "00:00:00",
        dateNews: "",
        title: "",
        body: "",
        urlPicture: "",
      });
      handleState();
    }
  };

  console.log(data);

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
        <Form.Item label="Titulo">
          <InputComponent
            onChange={handleChange}
            name="title"
            placeholder="Lago de los cisnes"
            data={data.title}
          />
        </Form.Item>

        <Form.Item label="Descripcion">
          <AreaText
            onChange={handleChange}
            name="body"
            placeholder="Se realizara el dia 2/2/2222 en la plaza San Francisco"
            value={data.body}
          />
        </Form.Item>

        <Form.Item label="Fecha del evento">
          <DateComponent
            name="dateNews"
            onChange={onChangeDate}
            date={
              option === "edit" || option === "editProfile"
                ? data?.dateNews
                : ""
            }
          />
        </Form.Item>

        <Form.Item label="Hora del evento">
          <TotalHours
            name="hour"
            hours={data.hour}
            handleChange={handleChangeHour}
          />
        </Form.Item>

        <Form.Item label="Imagen">
          <ImageCloudinary onChange={handleURLChange} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          <Text text="Crear" />
        </Button>
      </Form>
    </>
  );
}

export default FormEvents;
