import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
import SelectComponet from "../../select/SelectComponet";
import { useSelector, useDispatch } from "react-redux";
import Text from "@/components/text/Text";
import {
  filter,
  filterClear,
  stateFlag,
  filterURL,
  getTypeClassAll,
} from "@/redux/actions";

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
    let search = "search=typeHours&";
    if (data.order.trim()) {
      search += `order=${data.order}&`;
    }
    dispatch(filter(`${search}page=1`));
    dispatch(filterURL(`${search}page=`));
    dispatch(stateFlag("filter"));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getTypeClassAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
      });
      dispatch(filterURL(""));
    }, 10);
  };

  return (
    <>
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
        <Form.Item label="Ordernar" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <Text text="Buscar" />
        </Button>
      </Form>
      <Button type="primary" htmlType="submit" onClick={onClickClearData}>
        <Text text="Limpiar" />
      </Button>
    </>
  );
}

export default TypeClassFilter;
