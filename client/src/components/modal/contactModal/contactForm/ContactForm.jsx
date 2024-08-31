import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import State from "@/components/state/State";
import AreaText from "@/components/areaText/AreaText";
import Text from "@/components/text/Text";
import { editContact } from "@/redux/actions";

function ContactForm({ data }) {
  const dispatch = useDispatch();

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
        </Form.Item>

        <Form.Item label="Estado de contacto" name="stateContact">
          <State stateHours={info.stateContact} handleChange={onChangeState} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          <Text text="Aceptar" />
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
