import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
import { useDispatch } from "react-redux";
import Text from "@/components/text/Text";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import State from "@/components/state/State";
import { filterClear, stateFlag, filterURL, filterInfo, getContactAll } from "@/redux/actions";
import { castingURL } from "@/redux/castingURL";

function SendFilter() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    from: "",
    to: "",
    stateContact: false,
  });

  const [form] = Form.useForm();

  const handleFromDate = (date, dateString) => {
    setData({
      ...data,
      from: dateString,
    });
  };

  const handToDate = (date, dateString) => {
    setData({
      ...data,
      to: dateString,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateContact: boolean,
    });
  };

  const onFinish = () => {
    const queryRes = castingURL(data);
    dispatch(filterInfo("send", queryRes));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getContactAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        from: "",
        to: "",
        stateContact: false,
      });
      dispatch(filterURL(""));
    }, 10);
  };

  return (
    <div>
      <Form
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item label="Desde" name="from">
          <DatePicker placeholder={"2010-09-03"} onChange={handleFromDate} />
        </Form.Item>
        <Form.Item label="Hasta" name="to">
          <DatePicker placeholder={"2010-09-03"} onChange={handToDate} />
        </Form.Item>
        <Form.Item label="Estado" name="stateContact">
          <State handleChange={onChangeState} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <Text text="Buscar" />
        </Button>
      </Form>
      <Button type="primary" htmlType="submit" onClick={onClickClearData}>
        <Text text="Limpiar" />
      </Button>
    </div>
  );
}

export default SendFilter;
