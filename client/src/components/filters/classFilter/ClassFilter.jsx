import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Input } from "antd";
import SelectComponet from "@/components/select/SelectComponet";
import Text from "@/components/text/Text";
import State from "@/components/state/State";
import {
  getUserAll,
  getExtensionAll,
  getTypeClassAll,
  getClassAll,
  filter,
  filterClear,
  stateFlag,
  filterURL,
} from "@/redux/actions";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";
import InputComponent from "@/components/inputComponent/InputComponent";

function UserFilter() {
  const dispatch = useDispatch();
  const selectExtension = useSelector(({ root }) => root?.extension);
  const [form] = Form.useForm();
  const [data, setData] = useState({
    order: "",
    idUser: 0,
    idExtension: 0,
    idTypeClass: 0,
    stateClass: false,
  });
  const [nameData, setNameData] = useState({
    user: "",
    typeClass: "",
  });

  const handleChange = (event) => {
    const key = event.key ? event.title : event.target.name;
    const value = event.key ? event.key : event.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSelect = (idData, name, flag) => {
    if (flag === "typeClass") {
      setData({ ...data, idTypeClass: idData });
      setNameData({ ...nameData, typeClass: name });
    } else if (flag === "USER") {
      setData({ ...data, idUser: idData });
      setNameData({ ...nameData, user: name });
    }
  };

  const onChangeState = (boolean) => {
    setData({
      ...data,
      stateClass: boolean,
    });
  };

  const onFinish = () => {
    let search = "search=class&";
    if (data.order.trim()) {
      search += `order=${data.order}&`;
    }
    if (data.idUser > 0) {
      search += `idUser=${data.idUser}&`;
    }
    if (data.idExtension > 0) {
      search += `idExtension=${data.idExtension}&`;
    }
    if (data.idTypeClass > 0) {
      search += `idTypeClass=${data.idTypeClass}&`;
    }
    search += `stateClass=${data.stateClass}&`;
    dispatch(filter(`${search}page=1`, "classes"));
    dispatch(filterURL(`${search}page=`));
    dispatch(stateFlag("filter"));
  };

  const onClickClearData = () => {
    dispatch(stateFlag("clear"));
    setNameData({
      typeClass: "",
      user: "",
    });
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getClassAll());
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
    dispatch(getUserAll());
    dispatch(getExtensionAll());
    dispatch(getTypeClassAll());
  }, []);

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

        <Form.Item label="Profesor" name="teacher">
          <div>
            <ModalSelect render="TEACHER-ALL" handleSelect={handleSelect} />
            <InputComponent
              placeholder="Selecciona un profesor"
              data={nameData.user}
            />
          </div>
        </Form.Item>

        <Form.Item label="Extension" name="extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
          />
        </Form.Item>

        <Form.Item label="Tipo de clase" name="typeClass">
          <div>
            <ModalSelect render="TYPE-CLASS-ALL" handleSelect={handleSelect} />
            <InputComponent
              placeholder="Selecciona un tipo de clase"
              data={nameData.typeClass}
            />
          </div>
        </Form.Item>

        <Form.Item label="Estado" name="state">
          <State stateHours={data.stateClass} handleChange={onChangeState} />
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

export default UserFilter;
