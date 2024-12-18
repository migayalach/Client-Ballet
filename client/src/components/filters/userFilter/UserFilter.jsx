// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import State from "@/components/state/State";
import Text from "@/components/text/Text";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  filterClear,
  filterSet,
  getLevelAll,
  getExtensionAll,
  getUserAll,
  filterURL,
  stateFlag,
} from "@/redux/actions";

// STYLESHEET
import "./user-filter.css";

function Filters() {
  const dispatch = useDispatch();
  const selectLevel = useSelector(({ root }) => root?.level);

  const [data, setData] = useState({
    order: "",
    nameOrLastName: "",
    idLevel: 0,
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
    dispatch(
      filterSet({ search: "user", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getUserAll());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        nameOrLastName: "",
        idLevel: 0,
        stateUser: false,
      });
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
    }, 10);
  };

  useEffect(() => {
    dispatch(getLevelAll());
    dispatch(getExtensionAll());
  }, [dispatch]);

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
          maxWidth: 1000,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        className="form-container"
      >
        <Form.Item label="Ordernar" name="order" className="form-item">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>

        <Form.Item label="Por" name="nameOrLastName" className="form-item">
          <SelectComponet handleChange={handleChange} flag="Type" />
        </Form.Item>

        <Form.Item label="Niveles" name="level" className="form-item">
          <SelectComponet
            list={selectLevel}
            handleChange={handleChange}
            flag="Level"
          />
        </Form.Item>
        <Form.Item label="Estado" name="state" className="form-item">
          <State stateHours={data.stateUser} handleChange={onChangeState} />
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

export default Filters;
