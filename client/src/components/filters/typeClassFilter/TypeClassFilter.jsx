// COMPONET'S
import SelectComponet from "../../select/SelectComponet";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  getTypeClassAll,
  filterURL,
  stateFlag,
} from "@/redux/actions";

// STYLESHEET
import "./type-class-filter.css";

function TypeClassFilter() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
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

  const onFinish = () => {
    dispatch(
      filterSet({ search: "typeClass", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getTypeClassAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
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
        className="form-container"
      >
        <Form.Item label="Ordernar" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
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

export default TypeClassFilter;
