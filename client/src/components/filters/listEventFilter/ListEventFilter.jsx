// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import DateComponent from "@/components/date/DateComponent";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  filterSet,
  stateFlag,
  filterClear,
  getListEventsAll,
} from "@/redux/actions";

// STYLESHEET
import "./list-event-filter.css";

function ListEventFilter() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [data, setData] = useState({
    dateStart: "",
    dateEnd: "",
    order: "",
  });

  const handleChange = (event) => {
    const key = event.key ? event.title : event.target.name;
    const value = event.key ? event.key : event.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const onChangeDateFrom = (date, dateString) => {
    setData({
      ...data,
      dateStart: dateString,
    });
  };

  const onChangeDateTo = (date, dateString) => {
    setData({
      ...data,
      dateEnd: dateString,
    });
  };

  const onFinish = () => {
    dispatch(
      filterSet({ search: "listEvent", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getListEventsAll());
      form.resetFields();
      setData({
        dateStart: "",
        dateEnd: "",
        order: "",
      });
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
          maxWidth: 900,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="form-container"
      >
        <Form.Item label="Desde">
          <DateComponent name="dateStart" onChange={onChangeDateFrom} />
        </Form.Item>

        <Form.Item label="Hasta">
          <DateComponent name="dateEnd" onChange={onChangeDateTo} />
        </Form.Item>

        <Form.Item label="Orden">
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

export default ListEventFilter;
