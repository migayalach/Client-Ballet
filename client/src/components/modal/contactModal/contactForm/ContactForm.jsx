// COMPONET'S
import State from "@/components/state/State";
import AreaText from "@/components/areaText/AreaText";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Button, Form } from "antd";

//REDUX
import { editContact } from "@/redux/actions";

// STYLESHEET'
import "./contact-form.css";

// JAVASCRIP
import formValidationSend from "./validationContact";

function ContactForm({ data }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [info, setInfo] = useState({
    idContact: 0,
    feedback: "",
    stateContact: false,
  });

  const onChange = (event) => {
    setInfo({
      ...info,
      feedback: event.target.value,
    });
    setErrors(formValidationSend({ ...data, feedback: event.target.value }));
  };

  const onChangeState = (boolean) => {
    setInfo({
      ...info,
      stateContact: boolean,
    });
  };

  const onFinish = () => dispatch(editContact(info));

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    setInfo({
      idContact: data?.idContact,
      feedback: data?.feedback,
      stateContact: data?.stateContact,
    });

    return () => {
      setInfo({
        idContact: 0,
        feedback: "",
        stateContact: false,
      });
    };
  }, [data]);

  return (
    <div>
      <Form
        className="form-ant"
        labelCol={{
          span: 7,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Nombre">
          <p>{data?.nameContact}</p>
        </Form.Item>

        <Form.Item label="Email">
          <p>{data?.emailContact}</p>
        </Form.Item>

        <Form.Item label="Telefono">
          <p>{data?.phoneContact}</p>
        </Form.Item>

        <Form.Item label="Fecha de contacto">
          <p>{data?.dateContact.substring(0, 10)}</p>
        </Form.Item>

        <Form.Item label="Comentarios">
          <AreaText
            onChange={onChange}
            name="feedback"
            placeholder="Este tipo de baile proviene de las villas ubicadas en argentina"
            value={info.feedback}
          />
          {errors.feedback ? (
            <p className="messageError">{errors.feedback}</p>
          ) : (
            ""
          )}
        </Form.Item>

        <Form.Item label="Estado de contacto">
          <State stateHours={info.stateContact} handleChange={onChangeState} />
          {info.stateContact ? (
            <p className="successContact">Se contacto con exito</p>
          ) : (
            <p className="unsuccessContact">No se pudo contactar</p>
          )}
        </Form.Item>

        {!Object.keys(errors).length && info.feedback?.length ? (
          <Button type="primary" htmlType="submit">
            <Text text="Aceptar" />
          </Button>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
}

export default ContactForm;
