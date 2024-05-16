import React, { useState, useEffect } from "react";
import { Form } from "antd";
import SelectComponet from "../select/SelectComponet";
import State from "../state/State";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getLevelAll,
  getExtensionAll,
  filter,
  filterClear,
  getUserAll,
} from "@/redux/actions";
import Text from "@/components/text/Text";

function Filters() {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);
  const selectExtension = useSelector(({ root }) => root?.extension);

  const [data, setData] = useState({
    order: "",
    nameOrLastName: "",
    idLevel: 0,
    idExtension: 0,
    stateUser: false,
  });

  const handleChange = (event) => {
    const key = !event.key ? [event.target.name] : event.title;
    setData({
      ...data,
      [key]: !event.key ? event.target.value : event.key,
    });
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateUser: boolean,
    });
  };

  const onFinish = () => {
    let search = "";
    if (data.order.trim()) {
      search += `order=${data.order}&`;
    }
    if (data.nameOrLastName.trim()) {
      search += `nameOrLastName=${data.nameOrLastName}&`;
    }
    if (data.idLevel > 0) {
      search += `idLevel=${data.idLevel}&`;
    }
    if (data.idExtension > 0) {
      search += `idExtension=${data.idExtension}&`;
    }
    search += `stateUser=${data.stateUser}&`;
    dispatch(filter(`${search}page=1`));
  };

  const onClickClearData = () => {
    dispatch(filterClear());
    dispatch(getUserAll());
  };

  useEffect(() => {
    dispatch(getLevelAll());
    dispatch(getExtensionAll());
  }, []);

  return (
    <>
      <Form
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

        <Form.Item label="Por" name="nameOrLastName">
          <SelectComponet handleChange={handleChange} flag="Type" />
        </Form.Item>

        <Form.Item label="Niveles" name="level">
          <SelectComponet
            list={selectLevel}
            handleChange={handleChange}
            flag="Level"
          />
        </Form.Item>
        <Form.Item label="Carnet" name="extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
          />
        </Form.Item>
        <Form.Item label="Estado" name="state">
          <State stateHours={data.stateUser} handleChange={onChangeState} />
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

export default Filters;
