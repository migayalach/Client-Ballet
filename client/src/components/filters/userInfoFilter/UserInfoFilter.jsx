// COMPONET'S
import SelectComponet from "../../select/SelectComponet";
import Text from "@/components/text/Text";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";
import InputComponent from "@/components/inputComponent/InputComponent";

// HOOK'S
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

//REDUX
import {
  filterClear,
  filterSet,
  infoClear,
  filterURL,
  stateFlag,
  actionSet,
  actionClear,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'

function UserInfoFilter({ idUser }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    order: "",
    option: "",
    idCourse: 0,
    nameClass: "",
  });

  const handleSelect = (idData, name, flag) => {
    setData({ ...data, idCourse: idData, nameClass: name });
  };

  const handleChange = (event) => {
    const key = event.key ? event.title : event.target.name;
    const value = event.key ? event.key : event.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const onFinish = () => {
    data.idUser = idUser;
    dispatch(
      filterSet({
        search: `${data?.option}User`,
        data: JSON.stringify(data),
        page: 1,
      })
    );
    dispatch(actionSet(data?.option));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setTimeout(() => {
      dispatch(filterClear());
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        option: "",
        idCourse: 0,
        nameClass: "",
      });
      dispatch(infoClear());
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
      dispatch(actionClear());
    }, 10);
  };

  useEffect(() => {
    return () => {
      setData({ order: "", option: "", idCourse: 0, nameClass: "" });
    };
  }, []);

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
        <Form.Item label="Busqueda" name="search">
          <SelectComponet handleChange={handleChange} flag="option" />
        </Form.Item>

        <Form.Item label="Cursos" name="course">
          <div>
            <ModalSelect
              render="IDSTUDEN-ALL-CLASS"
              handleSelect={handleSelect}
              idUser={idUser}
            />
            <InputComponent
              placeholder="Selecciona una clase"
              data={data.nameClass}
            />
          </div>
        </Form.Item>

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
    </div>
  );
}

export default UserInfoFilter;
