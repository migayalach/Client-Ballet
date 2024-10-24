import React, { useState, useEffect } from "react";
import { Form, Button } from "antd";
import SelectComponet from "@/components/select/SelectComponet";
import State from "@/components/state/State";
import { useSelector, useDispatch } from "react-redux";
import {
  getLevelAll,
  getExtensionAll,
  filter,
  filterClear,
  getUserAll,
  stateFlag,
  filterURL,
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
      stateUser: boolean,
    });
  };

  const onFinish = () => {
    let search = "search=user&";
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
    dispatch(filter(`${search}page=1`, "user"));
    dispatch(filterURL(`${search}page=`));
    dispatch(stateFlag("filter"));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getUserAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        nameOrLastName: "",
        idLevel: 0,
        idExtension: 0,
        stateUser: false,
      });
      dispatch(filterURL(""));
    }, 10);
  };

  useEffect(() => {
    dispatch(getLevelAll());
    dispatch(getExtensionAll());
  }, [dispatch]);

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
