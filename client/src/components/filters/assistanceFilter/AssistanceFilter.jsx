// COMPONET'S
import Text from "@/components/text/Text";
import SelectComponet from "@/components/select/SelectComponet";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button, DatePicker } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  filterURL,
  stateFlag,
  getAssistanceClassId,
} from "@/redux/actions";

// STYLESHEET

function AssistanceFilter({ idClass }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    order: "",
    dateStart: "",
    dateEnd: "",
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

  const onFinish = () => {
    data.idClass = idClass;
    dispatch(
      filterSet({ search: "assistance", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getAssistanceClassId(idClass));
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        dateStart: "",
        dateEnd: "",
      });
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
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
        <Form.Item label="Desde" name="dateStart">
          <DatePicker placeholder={"2010-09-03"} onChange={handleFromDate} />
        </Form.Item>
        <Form.Item label="Hasta" name="dateEnd">
          <DatePicker placeholder={"2010-09-03"} onChange={handToDate} />
        </Form.Item>
        <Form.Item label="Orden" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
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

export default AssistanceFilter;
