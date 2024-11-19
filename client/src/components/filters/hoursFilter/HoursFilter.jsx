// COMPONET'S
import SelectComponet from "../../select/SelectComponet";
import Text from "@/components/text/Text";
import State from "@/components/state/State";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  getHoursAll,
  filterURL,
  stateFlag,
} from "@/redux/actions";

// STYLESHEET
import "./hours-filter.css";

function HoursFilter() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    order: "",
    state: false,
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

  const onChangeState = (boolean) => {
    setData({
      ...data,
      state: boolean,
    });
  };

  const onFinish = () => {
    dispatch(
      filterSet({ search: "hours", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getHoursAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        state: false,
      });
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
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
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="form-container"
      >
        <Form.Item label="Ordernar" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>

        <Form.Item label="State" name="state" className="state">
          <State state={data.state} handleChange={onChangeState} />
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

export default HoursFilter;
