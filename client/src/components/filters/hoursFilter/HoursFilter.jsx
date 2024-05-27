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
  getHoursAll,
} from "@/redux/actions";
import Check from "@/components/checkBox/Check";
import State from "@/components/state/State";

function HoursFilter() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    order: "",
    totalTime: false,
    stateCheck: false,
    stateHours: false,
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

  const onChangeCheckBox = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.checked,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateHours: boolean,
    });
  };

  const onFinish = () => {
    let search = "search=hours&";
    if (data.order.trim()) {
      search += `order=${data.order}&`;
    }
    if (data.totalTime && !data.stateCheck) {
      search += `totalTime=${data.totalTime}&`;
    } else if (data.stateCheck && !data.totalTime) {
      search += `stateHours=${data.stateHours}&`;
    }
    dispatch(filter(`${search}page=1`, "hours"));
    dispatch(filterURL(`${search}page=`));
    dispatch(stateFlag("filter"));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getHoursAll());
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

        <Form.Item label="Duracion" name="checkDuration">
          <Check
            checkState={data.totalTime}
            handleChange={onChangeCheckBox}
            name="totalTime"
            disabled={data.stateCheck ? true : false}
          />
        </Form.Item>

        <Form.Item label="Estado" name="checkState">
          <Check
            checkState={data.stateCheck}
            handleChange={onChangeCheckBox}
            name="stateCheck"
            disabled={data.totalTime ? true : false}
          />
        </Form.Item>

        {data.stateCheck && (
          <Form.Item label="State" name="stateHours">
            <State stateHours={data.stateHours} handleChange={onChangeState} />
          </Form.Item>
        )}

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

export default HoursFilter;
