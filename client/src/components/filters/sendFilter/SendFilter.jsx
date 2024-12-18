// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import State from "@/components/state/State";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button, DatePicker } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  getContactAll,
  filterURL,
} from "@/redux/actions";

// STYLESHEET
import "./send-filter.css";

function SendFilter() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    dateStart: "",
    dateEnd: "",
    state: false,
    order: "",
  });

  const [form] = Form.useForm();

  const handleChange = (event) => {
    const key = event.key ? event.title : event.target.name;
    const value = event.key ? event.key : event.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleFromDate = (date, dateString) => {
    setData({
      ...data,
      dateStart: dateString,
    });
  };

  const handToDate = (date, dateString) => {
    setData({
      ...data,
      dateEnd: dateString,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      state: boolean,
    });
  };

  const onFinish = () => {
    dispatch(
      filterSet({ search: "contact", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getContactAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        dateStart: "",
        dateEnd: "",
        state: false,
        order: "",
      });
      dispatch(filterURL(""));
    }, 10);
  };

  return (
    <div className="container-filter">
      <Form
        form={form}
        labelCol={{
          span: 80,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 900,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="form-container"
      >
        <Form.Item label="Desde" name="dateStart">
          <DatePicker placeholder={"2010-09-03"} onChange={handleFromDate} />
        </Form.Item>
        <Form.Item label="Hasta" name="dateEnd">
          <DatePicker placeholder={"2010-09-03"} onChange={handToDate} />
        </Form.Item>
        <Form.Item label="Orden" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>
        <Form.Item label="Estado" name="state" className="state-component">
          <div className="state">
            <State handleChange={onChangeState} />
          </div>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="button-search">
          <Text text="Buscar" />
        </Button>
      </Form>
      <Button
        type="primary"
        htmlType="submit"
        onClick={onClickClearData}
        className="button-clear"
      >
        <Text text="Limpiar" />
      </Button>
    </div>
  );
}

export default SendFilter;
