import React, { useState, useEffect } from "react";
import Text from "@/components/text/Text";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { Button, Form, Input } from "antd";
import { postAssistanceDate } from "@/redux/actions";

function FormAssistance({ idClass }) {
  const dispatch = useDispatch();
  const selectAssistance = useSelector(({ root }) => root?.data);

  const [date, setDate] = useState({ dateAssistance: "" });

  const onChange = (date, dateString) => {
    setDate({
      dateAssistance: dateString,
    });
  };

  const onFinish = () => {
    dispatch(
      postAssistanceDate({ idClass, dateAssistance: date.dateAssistance })
    );
  };

  useEffect(() => {
    setDate({
      dateAssistance: (selectAssistance?.dateAssistance).substring(0, 10),
    });
  }, [selectAssistance]);

  console.log(date);

  useEffect(() => {
    return () => {
      // console.log("bay");
    };
  }, []);

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
      <Form.Item label="Fecha" name="date">
        <DatePicker onChange={onChange} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        <Text text="Crear" />
      </Button>
    </Form>
  );
}

export default FormAssistance;
