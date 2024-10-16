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
import { addListEvent, editEvent } from "@/redux/actions";

// STYLESHEET'
import "./form-events.css";

// JAVASCRIP
import formValidation from "./formValidation.js";

function FormEvents({ option, handleState, event }) {
  const dispatch = useDispatch();
  const selectEvent = useSelector(({ root }) => root?.data);
  const [errors, setErrors] = useState({});
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
    setErrors(
      formValidation({ ...data, [event.target.name]: event.target.value })
    );
  };

  const handleChangeHour = (name, time, timeString, value) => {
    setData({
      ...data,
      hour: timeString,
    });
    setErrors(formValidation({ ...data, hour: timeString }));
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateNews: dateString,
    });
    setErrors(formValidation({ ...data, dateNews: dateString }));
  };

  const handleURLChange = (URL) => {
    setData({
      ...data,
      urlPicture: URL,
    });
    setErrors(formValidation({ ...data, urlPicture: URL }));
  };

  const onFinish = () => {
    if (event === "edit-event") {
      dispatch(editEvent(data));
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

  useEffect(() => {
    if (event === "edit-event") {
      selectEvent?.map(
        ({
          idListEvent,
          hourEvent,
          dateNews,
          title,
          body,
          stateEvent,
          urlPicture,
        }) =>
          setData({
            idListEvent,
            hour: hourEvent,
            dateNews: dateNews.toString().slice(0, 10),
            title,
            body,
            stateEvent,
            urlPicture,
          })
      );
    }
  }, [event]);

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
          {errors.title ? <p className="messageError">{errors.title}</p> : ""}
        </Form.Item>

        <Form.Item label="Descripcion">
          <AreaText
            onChange={handleChange}
            name="body"
            placeholder="Se realizara el dia 2/2/2222 en la plaza San Francisco"
            value={data.body}
          />
          {errors.body ? <p className="messageError">{errors.body}</p> : ""}
        </Form.Item>

        <Form.Item label="Fecha del evento">
          <DateComponent
            name="dateNews"
            onChange={onChangeDate}
            date={option !== "edit" ? data?.dateNews : ""}
          />
          {errors.dateNews ? (
            <p className="messageError">{errors.dateNews}</p>
          ) : (
            ""
          )}
        </Form.Item>

        <Form.Item label="Hora del evento">
          <TotalHours
            name="hour"
            hours={data.hour}
            handleChange={handleChangeHour}
          />
          {errors.hour ? <p className="messageError">{errors.hour}</p> : ""}
        </Form.Item>

        <Form.Item label="Imagen">
          <ImageCloudinary onChange={handleURLChange} />
          {errors.urlPicture ? (
            <p className="messageError">{errors.urlPicture}</p>
          ) : (
            ""
          )}
        </Form.Item>

        {!Object.keys(errors).length && data.title.length ? (
          <Button type="primary" htmlType="submit">
            <Text text="Crear" />
          </Button>
        ) : (
          ""
        )}
      </Form>
    </>
  );
}

export default FormEvents;