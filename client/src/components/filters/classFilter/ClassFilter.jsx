import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "antd";
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

function UserFilter() {
  const dispatch = useDispatch();
  const selectExtension = useSelector(({ root }) => root?.extension);
  const selectUser = useSelector(({ root }) => root?.user);
  const selectTypeClass = useSelector(({ root }) => root?.typeClass);
  const [form] = Form.useForm();
  const [data, setData] = useState({
    order: "",
    idUser: 0,
    idExtension: 0,
    idTypeClass: 0,
    stateClass: false,
  });

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
          {/* <SelectComponet
            list={selectUser}
            handleChange={handleChange}
            flag="User"
          /> */}
          <ModalSelect render="TEACHER-ALL" />
        </Form.Item>

        <Form.Item label="Extension" name="extension">
          <SelectComponet
            list={selectExtension}
            handleChange={handleChange}
            flag="Extension"
          />
        </Form.Item>

        <Form.Item label="Tipo de clase" name="typeClass">
          {/* <SelectComponet
            list={selectTypeClass}
            handleChange={handleChange}
            flag="TypeClass"
          /> */}
          <ModalSelect render="TYPE-CLASS-ALL" />
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
