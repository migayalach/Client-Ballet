// COMPONET'S
import Text from "@/components/text/Text";
import SelectComponet from "@/components/select/SelectComponet";

// HOOK'S
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button, DatePicker, Checkbox } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  filterURL,
  stateFlag,
  getParamsAllIdUser,
} from "@/redux/actions";

// STYLESHEET

function QualificationFilter({ idClass }) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    dateStart: "",
    dateEnd: "",
    noteFinish: false,
    order: "",
  });
  const [form] = Form.useForm();

  const handleChangeBox = (event) => {
    setData({
      ...data,
      noteFinish: event.target.checked,
    });
  };

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
      filterSet({
        search: "qualification",
        data: JSON.stringify(data),
        page: 1,
      })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getParamsAllIdUser(idClass));
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        dateStart: "",
        dateEnd: "",
        noteFinish: false,
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
        <Form.Item label="Notas" name="noteFinish">
          <Checkbox checked={data.noteFinish} onChange={handleChangeBox} />
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

export default QualificationFilter;
