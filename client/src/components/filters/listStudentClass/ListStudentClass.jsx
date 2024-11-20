// COMPONET'S
import State from "@/components/state/State";
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  getIdAllClassStudent,
  filterClear,
  filterSet,
  filterURL,
  stateFlag,
} from "@/redux/actions";

// STYLESHEET

export default function ListStudentClass({ idClass }) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [data, setData] = useState({
    order: "",
    state: true,
  });

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
    data.idClass = idClass;
    dispatch(
      filterSet({ search: "classList", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getIdAllClassStudent(idClass));
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        state: true,
      });
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
    }, 10);
  };

  return (
    <div
    // className="container-filter"
    >
      <Form
        form={form}
        labelCol={{
          span: 90,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // className="form-container"
      >
        <Form.Item label="Ordernar" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>

        <Form.Item label="Estado" name="state">
          <State stateHours={data.state} handleChange={onChangeState} />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          // className="button-search-class"
        >
          <Text text="Buscar" />
        </Button>
      </Form>
      <Button
        type="primary"
        htmlType="submit"
        onClick={onClickClearData}
        // className="button-clear-class"
      >
        <Text text="Limpiar" />
      </Button>
    </div>
  );
}
