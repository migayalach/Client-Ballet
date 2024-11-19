// COMPONET'S
import SelectComponet from "@/components/select/SelectComponet";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";
import InputComponent from "@/components/inputComponent/InputComponent";
import Text from "@/components/text/Text";
import State from "@/components/state/State";

// HOOK'S
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// LIBRARY
import { Form, Button } from "antd";

// REDUX
import {
  getUserAll,
  getExtensionAll,
  getTypeClassAll,
  filterSet,
  getClassAll,
  filterClear,
  stateFlag,
  filterURL,
} from "@/redux/actions";

// STYLESHEET
import "./class-filter.css";

function UserFilter() {
  const dispatch = useDispatch();
  const selectAccess = useSelector(({ root }) => root?.access);

  const [form] = Form.useForm();
  const [data, setData] = useState({
    order: "",
    idUser: 0,
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
    if (flag === "TYPE-CLASS") {
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
    dispatch(
      filterSet({ search: "class", data: JSON.stringify(data), page: 1 })
    );
  };

  const onClickClearData = () => {
    dispatch(stateFlag("filter-request"));
    setNameData({
      typeClass: "",
      user: "",
    });
    setTimeout(() => {
      dispatch(filterClear());
      dispatch(getClassAll(selectAccess?.idUser));
      //TODO  Resetea los campos del formulario - ANTDESING
      form.resetFields();
      setData({
        order: "",
        idTypeClass: 0,
        idLevel: 0,
        stateClass: false,
      });
      dispatch(filterURL(""));
      dispatch(stateFlag(""));
    }, 10);
  };

  useEffect(() => {
    dispatch(getUserAll());
    dispatch(getExtensionAll());
    dispatch(getTypeClassAll());
  }, []);

  return (
    <div className="container-filter">
      <Form
        form={form}
        labelCol={{
          span: 90,
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
        <Form.Item label="Ordernar" name="order">
          <SelectComponet handleChange={handleChange} flag="Order" />
        </Form.Item>

        <Form.Item
          label="Profesor"
          name="teacher"
          className="form-item-teacher"
        >
          <div className="containter-div">
            <div className="container-input">
              <InputComponent
                placeholder="Selecciona un profesor"
                data={nameData.user}
              />
            </div>
            <ModalSelect render="TEACHER-ALL" handleSelect={handleSelect} />
          </div>
        </Form.Item>

        <Form.Item
          label="Tipo de clase"
          name="typeClass"
          className="form-item-div"
        >
          <div className="containter-div">
            <div className="container-input">
              <InputComponent
                placeholder="Selecciona un tipo de clase"
                data={nameData.typeClass}
              />
            </div>
            <ModalSelect render="TYPE-CLASS-ALL" handleSelect={handleSelect} />
          </div>
        </Form.Item>

        <Form.Item label="Estado" name="state">
          <State stateHours={data.stateClass} handleChange={onChangeState} />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="button-search-class">
          <Text text="Buscar" />
        </Button>
      </Form>
      <Button
        type="primary"
        htmlType="submit"
        onClick={onClickClearData}
        className="button-clear-class"
      >
        <Text text="Limpiar" />
      </Button>
    </div>
  );
}

export default UserFilter;
